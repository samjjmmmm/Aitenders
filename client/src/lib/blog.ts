// client/src/lib/blog.ts
//
// Data source for the blog list page.
//
// Posts are managed in Decap CMS (/admin, collection "Blog"). Each post the
// CMS publishes is saved as one JSON file in client/src/content/blog/ and is
// picked up here at build time. The folder is empty until the first post is
// published, so the page shows its empty state.
//
// To switch to another CMS (headless API, Contentful, ...), only replace the
// body of `fetchBlogPosts` so it returns the same `BlogPost[]` shape.

export type BlogLanguage = "en" | "fr";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  date: string; // ISO date string
  author?: string;
  coverImage?: string;
  tags?: string[];
  language?: BlogLanguage; // no language = shown in every language
}

// Raw shape written by Decap CMS (see client/public/admin/config.yml).
interface CmsBlogEntry {
  title?: string;
  slug?: string;
  excerpt?: string;
  date?: string;
  author?: string;
  cover_image?: string;
  tags?: string[];
  language?: string;
  published?: boolean;
}

const cmsFiles = import.meta.glob<CmsBlogEntry>("../content/blog/*.json", {
  eager: true,
  import: "default",
});

function timeOf(date: string): number {
  const time = Date.parse(date);
  return Number.isNaN(time) ? 0 : time;
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.json$/, "");
}

function toBlogPost(path: string, entry: CmsBlogEntry): BlogPost | null {
  if (!entry || !entry.title || entry.published === false) return null;
  return {
    slug: entry.slug || slugFromPath(path),
    title: entry.title,
    excerpt: entry.excerpt,
    date: entry.date ?? "",
    author: entry.author,
    coverImage: entry.cover_image,
    tags: Array.isArray(entry.tags) ? entry.tags : undefined,
    language:
      entry.language === "en" || entry.language === "fr"
        ? entry.language
        : undefined,
  };
}

export async function fetchBlogPosts(language: BlogLanguage): Promise<BlogPost[]> {
  return Object.entries(cmsFiles)
    .map(([path, entry]) => toBlogPost(path, entry))
    .filter((post): post is BlogPost => post !== null)
    .filter((post) => !post.language || post.language === language)
    .sort((a, b) => timeOf(b.date) - timeOf(a.date));
}
