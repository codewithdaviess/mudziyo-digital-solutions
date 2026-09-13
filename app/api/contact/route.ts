import { NextResponse } from "next/server";
import { contactWebhookUrl, isHoneypotSubmission, parseContactEnquiry } from "../../lib/contact";

const windowMs = 10 * 60 * 1000;
const maxRequests = 5;
const attempts = new Map<string, number[]>();
const maximumBodyBytes = 16_384;

class RequestBodyTooLargeError extends Error {}

function withinRateLimit(request: Request) {
  const forwarded = process.env.CONTACT_FORM_TRUST_PROXY === "true" ? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() : undefined;
  const key = forwarded || "shared";
  const now = Date.now();
  for (const [candidate, timestamps] of attempts) {
    if (!timestamps.some((time) => now - time < windowMs)) attempts.delete(candidate);
  }
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= maxRequests || (!attempts.has(key) && attempts.size >= 5_000)) return false;
  recent.push(now);
  attempts.set(key, recent);
  return true;
}

function json(body: object, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

async function requestBody(request: Request): Promise<unknown> {
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("Missing body");
  const chunks: Uint8Array[] = [];
  let length = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > maximumBodyBytes) {
      await reader.cancel();
      throw new RequestBodyTooLargeError();
    }
    chunks.push(value);
  }
  const data = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { data.set(chunk, offset); offset += chunk.byteLength; }
  return JSON.parse(new TextDecoder().decode(data));
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return json({ error: "Invalid request origin" }, 403);
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") return json({ error: "Invalid request format" }, 415);
  if (Number(request.headers.get("content-length")) > maximumBodyBytes) return json({ error: "Request is too large." }, 413);
  if (!withinRateLimit(request)) return json({ error: "Too many requests. Please try again later." }, 429);

  let body: unknown;
  try {
    body = await requestBody(request);
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) return json({ error: "Request is too large." }, 413);
    return json({ error: "Invalid request." }, 400);
  }

  if (isHoneypotSubmission(body)) return json({ received: true });
  const enquiry = parseContactEnquiry(body);
  if (!enquiry) return json({ error: "Please complete the required fields." }, 400);
  const webhookUrl = contactWebhookUrl();
  if (!webhookUrl) return json({ error: "Contact delivery is not configured." }, 503);
  try {
    const delivery = await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(enquiry), redirect: "error", signal: AbortSignal.timeout(10_000) });
    if (!delivery.ok) return json({ error: "Unable to deliver enquiry." }, 502);
    return json({ received: true });
  } catch {
    return json({ error: "Unable to deliver enquiry." }, 502);
  }
}
