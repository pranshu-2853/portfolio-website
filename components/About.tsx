"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid gap-6 lg:grid-cols-5"
      >
        <motion.div variants={reveal} className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accentSoft">
            About
          </p>

          <h2 className="section-title mt-3">
            Backend Developer Focused on Secure API Design
          </h2>
        </motion.div>

        <motion.article variants={reveal} className="surface-card p-6 lg:col-span-3">
          <p className="text-sm leading-relaxed text-mist sm:text-base">
            I am a backend-focused engineering student at{" "}
            <span className="text-white font-medium">
              L.D. College of Engineering
            </span>
            , specializing in building secure and scalable backend systems using
            <span className="text-white"> Spring Boot</span>.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
            My experience includes designing REST APIs with JWT authentication,
            role-based access control, DTO-based architecture, validation,
            exception handling, pagination, and containerized deployment using
            Docker.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
            I enjoy translating business requirements into clean API contracts
            and building maintainable service layers that are easy to test,
            extend, and scale.
          </p>
        </motion.article>

        <motion.article variants={reveal} className="surface-card p-6 lg:col-span-5">
          <h3 className="text-lg font-semibold text-white">Education</h3>

          <p className="mt-3 text-sm text-mist sm:text-base">
            <span className="font-medium text-white">
              L.D. College of Engineering (LDCE)
            </span>
            <br />
            Bachelor of Engineering — Information Technology
            <br />
            July 2023 — June 2027
          </p>
        </motion.article>
      </motion.div>
    </section>
  );
}