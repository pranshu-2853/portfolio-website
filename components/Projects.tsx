"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accentSoft">
          Projects
        </p>

        <h2 className="section-title mt-3">
          Spring Boot and API Architecture Work
        </h2>

        <p className="mt-4 max-w-2xl text-mist text-sm sm:text-base">
          A selection of backend-focused projects demonstrating REST API design,
          JWT authentication, scalable service architecture, and containerized
          deployment using Spring Boot and Docker.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}