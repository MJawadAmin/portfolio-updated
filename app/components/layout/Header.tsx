"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
        >
          MJA
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-1.5 text-sm text-[var(--ink-soft)] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-elevated)] md:hidden">
          <div className="space-y-1 px-5 py-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block rounded-md px-3 py-2.5 text-[var(--ink-soft)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
