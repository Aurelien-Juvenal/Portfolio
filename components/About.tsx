"use client";

import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader";
import { profile } from "@/lib/data";

const stats = [
  { value: "6", label: "ans d'expérience" },
  { value: "30+", label: "produits livrés" },
  { value: "4", label: "équipes accompagnées" },
];

export default function About() {
  return (
    <section id="a-propos" className="border-b border-line px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SheetHeader index="02 / 05" label="PROFIL — NOTICE TECHNIQUE" title="À propos" />

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_0.7fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-paper-dim"
          >
            {profile.summary} Je travaille aussi bien seul, sur des projets freelance de bout en
            bout, qu'intégré à des équipes produit — toujours avec le même souci du détail : ce
            qui est mesuré est maîtrisé.
          </motion.p>

          <dl className="grid grid-cols-3 gap-6 self-start md:grid-cols-1 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-l border-line pl-4"
              >
                <dt className="font-display text-3xl font-semibold text-paper">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-xs text-paper-dim">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
