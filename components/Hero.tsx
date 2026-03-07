"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="home" className="section-shell relative pt-24 sm:pt-28">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.16em] text-accentSoft"
        >
          Java Backend Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hi, I'm <span className="text-accent">Pranshu Patel</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-3 text-xl text-mist sm:text-2xl"
        >
          Java Backend Developer building secure and scalable APIs with Spring Boot.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
        >
          Backend-focused engineering student specializing in Spring Boot REST APIs,
          JWT authentication, role-based authorization, and Dockerized backend systems.
          Passionate about building clean, scalable backend architecture.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:shadow-glow"
          >
            Explore Projects
          </a>

          <a
            href="https://github.com/pranshu-2853"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/80 hover:text-accentSoft"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pranshu-patel-gec-ldce-it-dte"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/80 hover:text-accentSoft"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/80 hover:text-accentSoft"
          >
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-3 sm:grid-cols-3"
        >
          <div className="surface-card px-4 py-4">
            <p className="text-2xl font-semibold text-white">200+</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-mist">
              DSA Problems Solved
            </p>
          </div>

          <div className="surface-card px-4 py-4">
            <p className="text-2xl font-semibold text-white">10+</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-mist">
              REST Endpoints Built
            </p>
          </div>

          <div className="surface-card px-4 py-4">
            <p className="text-2xl font-semibold text-white">2027</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-mist">
              B.E. IT Graduation
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}