import { DsaAchievement, SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java"]
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Hibernate"
    ]
  },
  {
    title: "Concepts",
    items: [
      "DTO Pattern",
      "Transaction Management",
      "Pessimistic Locking",
      "Idempotency",
      "JWT Authentication",
      "RBAC",
      "JPA Specifications",
      "Exception Handling",
      "Input Validation",
      "Logging"
    ]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "Maven", "Postman", "Swagger/OpenAPI", "Flyway"]
  },
  {
    title: "Testing",
    items: ["JUnit 5", "Mockito"]
  }
];

export const dsaAchievement: DsaAchievement = {
  solvedCount: "Solved 300+ Data Structures & Algorithms problems",
  topics: [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Heaps",
    "Graphs",
    "Binary Search",
    "Sliding Window",
    "Two Pointers",
    "Recursion & Backtracking",
    "Greedy Algorithms",
    "Prefix Sum",
    "Hashing",
    "Dynamic Programming"
  ]
};