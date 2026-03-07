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
      "Hibernate",
      "JDBC"
    ]
  },
  {
    title: "Concepts",
    items: [
      "Layered Architecture",
      "Dependency Injection",
      "DTO Pattern",
      "JWT Authentication",
      "RBAC",
      "Pagination",
      "Transaction Management"
    ]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"]
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "Maven", "Postman"]
  },
  {
    title: "Testing",
    items: ["JUnit 5", "Mockito"]
  }
];

export const dsaAchievement: DsaAchievement = {
  solvedCount: "Solved 200+ Data Structures & Algorithms problems",
  topics: [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Heaps",
    "Binary Search",
    "Sliding Window",
    "Two Pointers",
    "Recursion & Backtracking",
    "Greedy Algorithms",
    "Prefix Sum",
    "Hashing"
  ]
};
