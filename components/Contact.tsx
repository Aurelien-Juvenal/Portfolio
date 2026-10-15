"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-wide text-paper-dim">FEUILLE 05 / 05 — APPROBATION</p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-paper md:text-5xl"
        >
          Un projet à dessiner ensemble ?
        </motion.h2>

        <div className="mt-14 flex flex-col items-start justify-between gap-12 border-t border-line pt-10 md:flex-row md:items-end">
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-2xl text-paper underline decoration-stamp decoration-2 underline-offset-8 transition-colors hover:text-stamp md:text-3xl"
            >
              {profile.email}
            </a>
            <ul className="mt-6 flex gap-6">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-paper-dim transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* official stamp motif */}
          <div className="flex h-24 w-24 shrink-0 rotate-[-6deg] items-center justify-center rounded-full border-2 border-stamp text-center">
            <span className="font-mono text-[9px] leading-tight text-stamp">
              APPROUVÉ
              <br />
              REV. A
              <br />
              {new Date().getFullYear()}
            </span>
          </div>
        </div>

        <p className="mt-16 font-mono text-[11px] text-paper-faint">
          © {new Date().getFullYear()} {profile.name} — Dessiné et codé à la main.
        </p>
      </div>
    </section>
  );
}
