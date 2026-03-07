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
      "JDBC",
      "Servlets",
      "JSP"
    ]
  },
  {
    title: "Concepts",
    items: [
      "Layered Architecture",
      "Dependency Injection",
      "DTO Pattern",
      "JWT Authentication",
      "Role-Based Access Control",
      "Pagination & Sorting",
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
  solvedCount: "200+",
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
