"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SectionIntro } from "./section-intro";

export function ClearPathSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const section = sectionRef.current;
      if (!section || mediaQuery.matches) return;

      const bounds = section.getBoundingClientRect();
      const distance = window.innerHeight + bounds.height;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / distance));

      section.style.setProperty("--clear-path-offset", `${-64 * progress}px`);
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section clear-path-section">
      <div className="container">
        <div className="clear-path-intro">
          <SectionIntro
            title="From problem to solution."
            text="From the first conversation to launch and ongoing improvement, we keep the work focused, transparent and built around the problems that matter most to your business."
          />
          <div className="clear-path-actions">
            <Link className="button button-dark" href="/contact">
              Request a Quote
            </Link>
            <Link className="button button-outline" href="/work">
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
