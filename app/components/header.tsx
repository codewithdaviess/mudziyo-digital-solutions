"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav
          className={open ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="button nav-mobile-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
        <Link className="button nav-cta" href="/contact">
          Request a Quote
        </Link>
        <button
          className={open ? "menu-button open" : "menu-button"}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
