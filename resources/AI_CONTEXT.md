# AI Context – Portfolio Website

This file defines the architecture, rules, and design guidelines for generating code in this portfolio project.

The AI assistant must follow these rules when generating code.

---

# Tech Stack

Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: TailwindCSS

Animations: Framer Motion

Deployment: Vercel

Package Manager: npm

---

# Project Goal

Create a modern developer portfolio website for a backend developer.

The website should highlight:

- Backend engineering skills
- Spring Boot projects
- API architecture
- Docker experience
- DSA problem solving

The design should be clean, fast, and professional.

---

# Folder Structure

app/
  page.tsx
  layout.tsx

components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  ProjectCard.tsx
  Contact.tsx
  Footer.tsx

data/
  projects.ts
  skills.ts

types/
  project.ts
  skill.ts

public/
  images/

---

# Architecture Rules

The website must follow a **data-driven architecture**.

Projects must NOT be hardcoded in UI components.

All project information must be stored in:

data/projects.ts

Components must dynamically render data using `.map()`.

Example:

projects.map(project => <ProjectCard />)

---

# TypeScript Guidelines

All data must have proper TypeScript interfaces.

Example structure:

types/project.ts

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
}

---

# UI Design Rules

Design style:

- Modern developer portfolio
- Dark theme preferred
- Clean typography
- Minimal UI

Layout principles:

- large hero section
- grid-based project section
- card-based UI
- responsive design

---

# Animations

Use Framer Motion only for subtle animations:

- fade-in on scroll
- card hover effect
- small scale transitions

Avoid heavy animations.

---

# Sections Required

Hero
About
Skills
Projects
DSA Achievements
Contact

---

# Code Quality Rules

Generated code must:

- use TypeScript
- follow Next.js App Router conventions
- use functional React components
- use TailwindCSS for styling
- avoid inline styles when possible