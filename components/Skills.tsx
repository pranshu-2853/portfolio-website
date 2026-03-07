"use client";

import { motion } from "framer-motion";
import { dsaAchievement, skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accentSoft">Skills</p>
        <h2 className="section-title mt-3">Backend Toolkit and Core Concepts</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="surface-card p-5"
            >
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          id="achievements"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="surface-card scroll-mt-24 mt-8 p-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald">DSA Achievements</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Solved {dsaAchievement.solvedCount} problems across core algorithmic topics
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {dsaAchievement.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-lg border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-xs text-emerald-100"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
