import type { MetadataRoute } from "next";
export const dynamic = "force-static";

import fs from "fs";
import path from "path";

type BlogPost = {
  slug: string;
  date?: string;
  priority?: number;
};

const BASE_URL = "https://pranshu-patel.vercel.app" as const;

function clampPriority(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function getBlogPostsFromData(): BlogPost[] {
  try {
    const dataDir = path.join(process.cwd(), "data");
    const postsJsonPath = path.join(dataDir, "posts.json");

    if (!fs.existsSync(postsJsonPath)) {
      return [];
    }

    const raw = fs.readFileSync(postsJsonPath, "utf-8");
    const parsed = JSON.parse(raw) as unknown;

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((item) => {
        if (!item || typeof item !== "object") return null;

        const slug = (item as { slug?: unknown }).slug;
        if (typeof slug !== "string" || !slug.trim()) return null;

        const date = (item as { date?: unknown }).date;
        const priority = (item as { priority?: unknown }).priority;

        const normalized: BlogPost = {
          slug: slug.trim(),
        };

        if (typeof date === "string" && date.trim()) {
          normalized.date = date;
        }

        if (typeof priority === "number") {
          normalized.priority = clampPriority(priority, 0.7, 0.9);
        }

        return normalized;
      })
      .filter((post): post is BlogPost => post !== null);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ✅ Static routes (fixed)
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: "weekly",
    },
  ];

  const blogPosts = getBlogPostsFromData();

  // ✅ Dynamic blog routes
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const url = `${BASE_URL}/posts/${post.slug}`;

    let lastModified: Date | undefined;
    if (post.date) {
      const parsedDate = new Date(post.date);
      if (!Number.isNaN(parsedDate.getTime())) {
        lastModified = parsedDate;
      }
    }

    return {
      url,
      lastModified: lastModified ?? now,
      priority: clampPriority(post.priority ?? 0.8, 0.7, 0.9),
      changeFrequency: "monthly",
    };
  });

  return [...staticEntries, ...blogEntries];
}