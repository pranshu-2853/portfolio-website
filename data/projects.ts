import { Project } from "@/types/project";

export const projects: Project[] = [
  {
  title: "Secure Engineer Management REST API",
  description:
    "Production-grade Spring Boot REST API with secure JWT authentication, RBAC authorization, validation, and scalable query handling.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Hibernate",
    "PostgreSQL",
    "Docker",
    "JUnit 5",
    "Mockito"
  ],
  github: "https://github.com/pranshu-2853/secure-engineer-management-api",
  image: "/images/secure-engineer-api-swagger.jpg",
  highlights: [
    "Secured all endpoints with JWT + RBAC using @PreAuthorize; enforced ADMIN/USER access at the method level",
    "Achieved 90%+ service-layer test coverage with JUnit 5 and Mockito; added MockMvc integration tests",
    "Implemented DTO layer to eliminate sensitive field exposure and reduce payload size by ~30%"
  ]
},
  {
  title: "Ticket Booking System",
  description:
    "High-concurrency ticket booking backend built as a modular monolith with pessimistic DB locking, Redis soft locks, idempotency enforcement, and JWT + refresh token authentication.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Flyway",
    "JUnit 5"
  ],
  github: "https://github.com/pranshu-2853/ticket-booking-system",
  image: "/images/ticket_booking_system_banner.svg",
  highlights: [
    "Validated zero race conditions under load with an 8-thread concurrency test using ExecutorService + CountDownLatch",
    "Implemented pessimistic locking (PESSIMISTIC_WRITE) and Redis soft locking (SET NX EX) to prevent double bookings",
    "Enforced idempotency keys on critical endpoints and managed schema evolution with Flyway migrations"
  ]
 }
];
