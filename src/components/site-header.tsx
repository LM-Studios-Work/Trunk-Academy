"use client";

import Link from "next/link";
import { navigation } from "@/components/site-navigation";
import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuToggle = menuToggleRef.current;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      ).filter((element) => element.tabIndex >= 0);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 700) setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = previousOverflow;
      menuToggle?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Trunk Academy home">
          <span className="brand-name">TRUNK<br />ACADEMY</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map(({ label, href }) => <Link href={href} key={label}>{label}</Link>)}
        </nav>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuToggleRef}
        >
          <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
        </button>
        <Link className="header-cta" href="/contact" aria-label="Come say hello"><span className="header-cta-label">Come say hello</span><span className="header-cta-arrow" aria-hidden="true">→</span></Link>
      </header>

      <div
        className={`mobile-menu-layer${isMenuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        ref={menuRef}
      >
        <button className="mobile-menu-scrim" type="button" tabIndex={-1} aria-label="Close menu" onClick={() => setIsMenuOpen(false)} />
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-heading">
            <p id="mobile-menu-title">Trunk Academy</p>
            <button className="mobile-menu-close" type="button" aria-label="Close navigation" onClick={() => setIsMenuOpen(false)}>×</button>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navigation.map(({ label, href }, index) => (
              <Link href={href} key={label} onClick={() => setIsMenuOpen(false)} ref={index === 0 ? firstLinkRef : undefined}>{label}</Link>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <p>Little beginnings, cared for with love.</p>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Come say hello</Link>
          </div>
        </div>
      </div>
    </>
  );
}
