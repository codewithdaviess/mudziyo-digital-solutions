"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./parallax-hero.module.css";

export function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const hero = heroRef.current;
      if (!hero || mediaQuery.matches) return;

      hero.style.setProperty("--scroll-distance", `${Math.min(window.scrollY, 900)}px`);
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
    <section ref={heroRef} className={styles.hero} aria-label="Mudziyo Digital Solutions introduction">
      <h1 className={styles.title}>
        <span className={styles.accent}>We build</span>
        <br className={styles.mobileBreak} /> what your business needs next.
      </h1>
      <div className={styles.globe}>
        <Image
          className={styles.globeImage}
          src="/images/worldglobe.png"
          alt="World globe"
          fill
          priority
          sizes="(max-width: 520px) 142vw, (max-width: 800px) 113vw, 72vw"
        />
      </div>
    </section>
  );
}
