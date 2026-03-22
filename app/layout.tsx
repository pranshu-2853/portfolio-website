import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

const BASE_URL = "https://pranshu-patel.vercel.app" as const;

const skillKeywords = skillCategories.flatMap((category) => category.items);
const projectTechKeywords = projects.flatMap((project) => project.tech);

const baseDescription =
  "Pranshu Patel is a backend developer specializing in Spring Boot, REST APIs, scalable Java applications, and DSA.";

const keywords = Array.from(
  new Set([
    "Java backend developer",
    "Backend developer",
    "Java",
    "Spring Boot",
    "REST APIs",
    "JWT authentication",
    "RBAC",
    "Docker",
    "Hibernate",
    "MySQL",
    "PostgreSQL",
    "Data Structures and Algorithms",
    "DSA",
    ...skillKeywords,
    ...projectTechKeywords
  ])
);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}#person`,
  name: "Pranshu Patel",
  url: BASE_URL,
  jobTitle: "Backend Developer",
  description: baseDescription,
  sameAs: [
    "https://github.com/pranshu-2853",
    "https://www.linkedin.com/in/pranshu-patel-gec-ldce-it-dte"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}#website`,
  url: BASE_URL,
  name: "Pranshu Patel Portfolio",
  description: baseDescription,
  inLanguage: "en"
};

const jsonLd = [personJsonLd, websiteJsonLd];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pranshu Patel | Backend Developer",
    template: "%s | Pranshu Patel"
  },
  description: baseDescription,
  keywords,

  // ✅ GOOGLE VERIFICATION ADDED HERE
  verification: {
    google: "b4nLZ7qfM-PQnzupUD06gTDgW8VKHDcDaDVGMsX1JI0"
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Pranshu Patel | Backend Developer",
    description: baseDescription,
    url: BASE_URL,
    siteName: "Pranshu Patel Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranshu Patel Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranshu Patel | Backend Developer",
    description: baseDescription,
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}