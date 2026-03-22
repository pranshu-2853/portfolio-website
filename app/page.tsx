import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { projects } from "@/data/projects";
import { dsaAchievement, skillCategories } from "@/data/skills";

const BASE_URL = "https://pranshu-patel.vercel.app" as const;

const backendCategory = skillCategories.find(
  (category) => category.title.toLowerCase() === "backend"
);

const languageCategory = skillCategories.find(
  (category) => category.title.toLowerCase() === "languages"
);

const backendSkillsList =
  backendCategory?.items.join(", ") ??
  "Spring Boot, REST APIs, and Spring Security";

const languagesList = languageCategory?.items.join(", ") ?? "Java";

const primaryProject = projects[0];
const primaryProjectTech =
  primaryProject?.tech.join(", ") ??
  "Spring Boot, Spring Security, Hibernate, MySQL, Docker";

const dsaSummary = dsaAchievement.solvedCount;
const dsaTopicsSummary = dsaAchievement.topics
  .slice(0, 5)
  .join(", ");

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: project.title,
    description: project.description,
    url: project.github,
    image: project.image ? `${BASE_URL}${project.image}` : undefined,
    keywords: project.tech.join(", "),
  })),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden pb-10">
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
        />

        {/* Hidden SEO H1 */}
        <h1 className="sr-only">
          Pranshu Patel | Backend Developer | Java &amp; Spring Boot
        </h1>

        {/* Hidden SEO content (NOT visible on UI) */}
        <section style={{ display: "none" }}>
          <p>
            Pranshu Patel is a backend-focused {languagesList} developer
            specializing in {backendSkillsList}, building secure, testable REST
            APIs using technologies like {primaryProjectTech}. {dsaSummary}, with
            strong foundations in {dsaTopicsSummary}.
          </p>
        </section>

        {/* Background effects */}
        <div className="pointer-events-none absolute -left-36 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-[22rem] h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />

        {/* Main UI */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}