import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Pranshu Patel | Java Backend Developer",
  description:
    "Portfolio of Pranshu Patel, a Java backend developer focused on secure APIs, Spring Boot architecture, Dockerized services, and DSA-driven problem solving."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
