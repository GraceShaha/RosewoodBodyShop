"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="flex w-full items-center bg-white px-6 pt-4 pb-4 lg:px-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/rbs_logo.png" alt="Rosewood Body Shop" className="h-15 w-auto" />
          </Link>
          <nav className="flex flex-1 items-center justify-center gap-8 px-6 pb-3 pt-2">
            {/* Desktop nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground transition-colors hover:text-rosewood"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="flex items-center gap-3">
              <a
              href="#contact"
              className="rounded-lg bg-rosewood px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rosewood-dark"
              >
              Book an Estimate
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100037187896862"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-foreground transition-colors hover:text-rosewood"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden text-align: start">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-rosewood"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-block rounded-lg bg-rosewood px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-rosewood-dark"
            >
              Book an Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
