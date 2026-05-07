"use client";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-rule"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-[13px] tracking-[0.22em] uppercase text-ink">
          Stillform
        </span>
        <a
          href="#waitlist"
          className="text-[13px] font-body font-medium text-ink-2 hover:text-ink transition-colors duration-150 tracking-wide"
        >
          Join waitlist →
        </a>
      </div>
    </nav>
  );
}
