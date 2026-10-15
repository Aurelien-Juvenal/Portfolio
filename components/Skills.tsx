"use client";

import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="competences" className="border-b border-line px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SheetHeader index="03 / 05" label="LÉGENDE — SAVOIR-FAIRE" title="Compétences" />

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-ink px-6 py-8 transition-colors hover:bg-ink-2"
            >
              <p className="font-mono text-xs text-stamp">{skill.code}</p>
              <h3 className="mt-3 font-display text-lg font-medium text-paper">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-paper-dim">{skill.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
