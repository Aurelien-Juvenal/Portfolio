"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      opacity: { delay: i * 0.15, duration: 0.3 },
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.9 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center border-b border-line px-6 pt-24 md:px-10"
    >
      {/* corner registration marks — drafting table convention */}
      <span className="absolute left-4 top-24 h-4 w-4 border-l border-t border-line-strong" />
      <span className="absolute right-4 top-24 h-4 w-4 border-r border-t border-line-strong" />
      <span className="absolute bottom-6 left-4 h-4 w-4 border-b border-l border-line-strong" />
      <span className="absolute bottom-6 right-4 h-4 w-4 border-b border-r border-line-strong" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-wide text-stamp"
          >
            {profile.role.toUpperCase()} — {profile.location}
          </motion.p>

          <h1 className="mt-6 whitespace-pre-line font-display text-4xl font-semibold leading-[1.08] text-paper sm:text-5xl md:text-6xl">
            {profile.tagline}
          </h1>

          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-md text-[15px] leading-relaxed text-paper-dim"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <a
              href="#projets"
              className="border border-paper px-6 py-3 font-mono text-xs tracking-wide text-paper transition-colors hover:border-stamp hover:text-stamp"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-wide text-paper-dim underline decoration-line-strong underline-offset-4 transition-colors hover:text-paper"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* orchestrated draw-in schematic: a small "system" of nodes, standing for how the dev's stack connects */}
        <motion.svg
          viewBox="0 0 420 380"
          className="mx-auto hidden w-full max-w-md md:block"
          initial="hidden"
          animate="visible"
        >
          <motion.rect
            x="30" y="40" width="120" height="64"
            className="fill-none dim-line"
            custom={0} variants={draw}
          />
          <text x="90" y="76" textAnchor="middle" className="fill-[#E9EDF3] font-mono text-[11px]">
            UI / React
          </text>

          <motion.rect
            x="270" y="40" width="120" height="64"
            className="fill-none dim-line"
            custom={1} variants={draw}
          />
          <text x="330" y="76" textAnchor="middle" className="fill-[#E9EDF3] font-mono text-[11px]">
            API / Node
          </text>

          <motion.rect
            x="150" y="180" width="120" height="64"
            className="fill-none dim-line"
            custom={2} variants={draw}
          />
          <text x="210" y="216" textAnchor="middle" className="fill-[#E9EDF3] font-mono text-[11px]">
            PostgreSQL
          </text>

          <motion.rect
            x="150" y="300" width="120" height="60"
            className="fill-none"
            stroke="#E2572B"
            strokeWidth="1"
            custom={3} variants={draw}
          />
          <text x="210" y="334" textAnchor="middle" className="fill-[#E2572B] font-mono text-[11px]">
            Déployé
          </text>

          <motion.path d="M90 104 L90 140 L210 140 L210 180" className="dim-line" fill="none" custom={2} variants={draw} />
          <motion.path d="M330 104 L330 140 L210 140" className="dim-line" fill="none" custom={2.4} variants={draw} />
          <motion.path d="M210 244 L210 300" className="dim-line" fill="none" custom={3.2} variants={draw} />

          {/* dimension annotation */}
          <motion.text
            x="30" y="30"
            className="fill-[#93A9C7] font-mono text-[9px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            SCHÉMA — ARCHITECTURE TYPE
          </motion.text>
        </motion.svg>
      </div>
    </section>
  );
}
