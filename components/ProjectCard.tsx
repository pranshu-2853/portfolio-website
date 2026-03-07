"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="surface-card flex h-full flex-col p-6"
    >
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-lg border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="h-40 w-full object-cover"
        />
        </div>
      )}  
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && (
        <ul className="mt-4 space-y-1 text-sm text-mist">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-accent">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-mist"
          >
            {item}
          </span>
        ))}
      </div>

      {/* GitHub button */}
      <div className="mt-6 flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:shadow-glow"
        >
          View Code
        </a>
      </div>
    </motion.article>
  );
}