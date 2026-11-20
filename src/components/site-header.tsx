"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/components/site-navigation";
import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Dynamic navbar height calculation & scroll alignment across all pages
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height;
        if (height > 0) {
          document.documentElement.style.setProperty("--navbar-height", `${Math.round(height)}px`);
        }
      }
    };

    updateNavbarHeight();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && headerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateNavbarHeight();
      });
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener("resize", updateNavbarHeight);

    const scrollToTarget = (targetId: string, smooth: boolean = true): boolean => {
      if (targetId === "top" || targetId === "") {
        window.scrollTo({
          top: 0,
          behavior: smooth ? "smooth" : "auto",
        });
        return true;
      }

      const decodedId = decodeURIComponent(targetId);
      const targetElement =
        document.getElementById(decodedId) ||
        document.querySelector(`[name="${decodedId}"]`);

      if (targetElement instanceof HTMLElement) {
        const headerHeight = headerRef.current
          ? headerRef.current.getBoundingClientRect().height
          : 88;
        const elementRect = targetElement.getBoundingClientRect();
        const currentScrollY = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
        const targetPosition = elementRect.top + currentScrollY - headerHeight;

        window.scrollTo({
          top: Math.max(0, Math.round(targetPosition)),
          behavior: smooth ? "smooth" : "auto",
        });
        return true;
      }
      return false;
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      const button = target.closest<HTMLElement>("[data-target], [data-href], [data-scroll]");

      let hash = "";

      if (link) {
        const rawHref = link.getAttribute("href") || "";
        if (rawHref.startsWith("#")) {
          hash = rawHref.slice(1);
        } else {
          try {
            const url = new URL(link.href, window.location.href);
            if (
              url.origin === window.location.origin &&
              url.pathname === window.location.pathname &&
              url.hash
            ) {
              hash = url.hash.slice(1);
            }
          } catch {
            // ignore malformed URLs
          }
        }
      } else if (button) {
        const targetAttr =
          button.getAttribute("data-target") ||
          button.getAttribute("data-href") ||
          button.getAttribute("data-scroll") ||
          "";
        if (targetAttr.startsWith("#")) {
          hash = targetAttr.slice(1);
        } else if (targetAttr) {
          hash = targetAttr;
        }
      }

      if (hash || (link && link.getAttribute("href") === "#top")) {
        const effectiveHash = hash || "top";
        if (scrollToTarget(effectiveHash, true)) {
          e.preventDefault();
          setIsMenuOpen(false);
          if (effectiveHash === "top") {
            history.pushState(null, "", window.location.pathname + window.location.search);
          } else {
            history.pushState(null, "", `#${effectiveHash}`);
          }
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    // Handle incoming hash on load or page navigation
    const handleInitialHash = () => {
      if (window.location.hash) {
        const currentHash = window.location.hash.slice(1);
        if (currentHash) {
          // Delay briefly to allow layout to settle
          setTimeout(() => {
            scrollToTarget(currentHash, true);
          }, 60);
        }
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToTarget(window.location.hash.slice(1), true);
      }
    };

    handleInitialHash();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavbarHeight);
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

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
      <header className="site-header" ref={headerRef}>
        <Link className="brand" href="/" aria-label="Trunk Academy home">
          <Image
            src="/trunk academy logo.png"
            alt="Trunk Academy logo"
            width={46}
            height={69}
            className="brand-logo"
            priority
          />
          <span className="brand-name">Trunk Academy</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map(({ label, href }) => (
            <Link href={href} key={label} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
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
        <Link className="header-cta" href="/contact" aria-label="Get in touch with us"><span className="header-cta-label">Get in touch with us</span><span className="header-cta-arrow" aria-hidden="true">→</span></Link>
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
            <div className="mobile-menu-brand">
              <Image
                src="/trunk academy logo.png"
                alt="Trunk Academy logo"
                width={36}
                height={54}
                className="mobile-menu-logo"
              />
              <p id="mobile-menu-title">Trunk Academy</p>
            </div>
            <button className="mobile-menu-close" type="button" aria-label="Close navigation" onClick={() => setIsMenuOpen(false)}>×</button>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navigation.map(({ label, href }, index) => (
              <Link
                href={href}
                key={label}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                ref={index === 0 ? firstLinkRef : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <p>The start of something beautiful.</p>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get in touch with us</Link>
          </div>
        </div>
      </div>
    </>
  );
}
