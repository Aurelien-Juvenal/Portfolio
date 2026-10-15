"use client";

import { profile } from "@/lib/data";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#accueil"
          className="font-mono text-xs tracking-wide text-paper-dim transition-colors hover:text-stamp"
        >
          {profile.name.toUpperCase()} <span className="text-paper-faint">// PORTFOLIO</span>
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs text-paper-dim transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
