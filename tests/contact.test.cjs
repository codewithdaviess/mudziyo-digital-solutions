require('../scripts/load-typescript.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { contactWebhookUrl, isHoneypotSubmission, parseContactEnquiry } = require('../app/lib/contact.ts');

const validEnquiry = {
  name: 'A Person', email: 'person@example.com', need: 'Website', description: 'A new company website.',
};

test('contact enquiries are trimmed, bounded and validated before delivery', () => {
  const enquiry = parseContactEnquiry({ ...validEnquiry, business: '  Mudziyo  ', phone: ' 123 ' });
  assert.deepEqual(enquiry, { ...validEnquiry, business: 'Mudziyo', phone: '123', budget: '', timeline: '' });
  assert.equal(parseContactEnquiry({ ...validEnquiry, email: 'not-an-email' }), null);
  assert.equal(parseContactEnquiry({ ...validEnquiry, description: '' }), null);
  assert.equal(parseContactEnquiry(null), null);
});

test('honeypot submissions are detected without forwarding visitor data', () => {
  assert.equal(isHoneypotSubmission({ ...validEnquiry, website: 'https://spam.example' }), true);
  assert.equal(isHoneypotSubmission(validEnquiry), false);
});

test('only HTTPS contact webhook URLs are accepted', () => {
  const previous = process.env.CONTACT_FORM_WEBHOOK_URL;
  try {
    process.env.CONTACT_FORM_WEBHOOK_URL = 'http://example.com/contact';
    assert.equal(contactWebhookUrl(), null);
    process.env.CONTACT_FORM_WEBHOOK_URL = 'https://example.com/contact';
    assert.equal(contactWebhookUrl(), 'https://example.com/contact');
  } finally {
    if (previous === undefined) delete process.env.CONTACT_FORM_WEBHOOK_URL;
    else process.env.CONTACT_FORM_WEBHOOK_URL = previous;
  }
});
