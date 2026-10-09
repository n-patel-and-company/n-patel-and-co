"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel as soon as the viewport is wide enough for the
  // inline nav, so the two never show at once on an orientation change.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 860px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="header" data-scrolled={scrolled}>
      <div className="shell">
        <div className="header__bar">
          <a className="brand" href="#top" aria-label="N. Patel and Company, home">
            <span className="brand__mark" aria-hidden="true">
              NP
            </span>
            <span className="brand__text">
              <span className="brand__name">N. Patel &amp; Co.</span>
              <span className="brand__tag">Furniture Material</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {LINKS.map((link) => (
              <a key={link.href} className="nav__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className="mobile-nav"
        id="mobile-nav"
        hidden={!open}
      >
        <div className="shell">
          <ul className="mobile-nav__list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="mobile-nav__link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
