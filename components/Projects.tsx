"use client";

import { motion } from "framer-motion";
import SheetHeader from "./SheetHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets" className="border-b border-line px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SheetHeader index="04 / 05" label="JEU DE PLANS — RÉALISATIONS" title="Projets" />

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <motion.article
              key={project.sheet}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-[80px_1fr_1fr]"
            >
              <p className="font-mono text-xs text-paper-faint">
                FEUILLE {project.sheet} / 03
                <br />
                {project.scale}
              </p>

              <div>
                <p className="font-mono text-xs text-paper-dim">{project.year}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-paper">
                  {project.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {project.stack.map((tech) => (
                    <li key={tech} className="font-mono text-[11px] text-stamp">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between">
                <p className="max-w-sm text-[15px] leading-relaxed text-paper-dim">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  className="mt-6 inline-block w-fit border-b border-paper-dim font-mono text-xs text-paper transition-colors hover:border-stamp hover:text-stamp"
                >
                  Consulter le projet
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
