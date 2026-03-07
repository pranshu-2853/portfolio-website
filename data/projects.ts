import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Secure Engineer Management REST API",
    description:
      "Production-grade Spring Boot REST API with secure JWT authentication, RBAC authorization, validation, and scalable query handling.",
    tech: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "MySQL",
      "Docker",
      "JUnit 5",
      "Mockito"
    ],
    github: "https://github.com/pranshu-2853",
    highlights: [
      "Built 10+ endpoints using layered architecture",
      "Implemented DTO pattern with validation and exception handling",
      "Added pagination and sorting for scalable data access"
    ]
  }
];
