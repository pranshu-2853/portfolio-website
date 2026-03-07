"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-wide text-accentSoft"
        >
          pranshu.dev
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-1.5 text-sm text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 text-sm text-mist md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="transition hover:text-accent"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/Pranshu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-ink transition hover:shadow-glow"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/10 bg-panel/95 md:hidden"
        >
          <ul className="section-shell flex flex-col gap-4 py-4 text-sm text-mist">

            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-1 transition hover:bg-white/5 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Resume mobile */}
            <li>
              <a
                href="/Pranshu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-2 py-1 font-semibold text-accent"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>

          </ul>
        </motion.div>
      )}
    </header>
  );
}