// client/src/pages/blog.tsx
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { MdArticle } from "react-icons/md";
import Header from "@/components/header";
import Footer_4 from "@/components/Footer_4";
import { Card } from "@/components/ui/card";
import { fetchBlogPosts, type BlogLanguage, type BlogPost } from "@/lib/blog";

function formatDate(date: string, language: BlogLanguage): string {
  const time = Date.parse(date);
  if (Number.isNaN(time)) return "";
  return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(time);
}

function BlogCard({ post, language }: { post: BlogPost; language: BlogLanguage }) {
  const { t } = useTranslation();
  const date = formatDate(post.date, language);
  const meta = [date, post.author].filter(Boolean).join(" · ");

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="h-full flex flex-col overflow-hidden rounded-xl border border-aitenders-light-blue bg-aitenders-white-blue hover:border-aitenders-primary-blue transition-all duration-200 cursor-pointer">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt=""
            loading="lazy"
            className="w-full aspect-[16/9] object-cover"
          />
        ) : (
          <div className="w-full aspect-[16/9] flex items-center justify-center bg-aitenders-pale-blue">
            <MdArticle className="h-8 w-8 text-aitenders-primary-blue" />
          </div>
        )}

        <div className="flex flex-col flex-1 p-5">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs font-medium border border-aitenders-light-blue bg-aitenders-pale-blue text-aitenders-primary-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2 className="text-lg font-semibold text-aitenders-black leading-snug mb-2">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-sm text-aitenders-dark-blue leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between gap-3 pt-2">
            {meta && <span className="text-xs text-aitenders-dark-blue">{meta}</span>}
            <span className="ml-auto text-sm font-semibold text-aitenders-primary-blue">
              {t("blog.readArticle")}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

function StatusBox({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-xl mx-auto text-center rounded-xl border border-aitenders-light-blue bg-aitenders-white-blue px-6 py-12">
      <div className="p-3 rounded-lg mb-4 mx-auto w-fit bg-aitenders-pale-blue text-aitenders-primary-blue">
        <MdArticle className="h-6 w-6" />
      </div>
      <h2 className="text-lg font-semibold text-aitenders-black mb-2">{title}</h2>
      {description && <p className="text-sm text-aitenders-dark-blue">{description}</p>}
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-xl border border-aitenders-light-blue bg-aitenders-white-blue overflow-hidden animate-pulse"
        >
          <div className="w-full aspect-[16/9] bg-aitenders-pale-blue" />
          <div className="p-5 space-y-3">
            <div className="h-4 w-3/4 rounded bg-aitenders-light-blue" />
            <div className="h-3 w-full rounded bg-aitenders-light-blue" />
            <div className="h-3 w-2/3 rounded bg-aitenders-light-blue" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const language: BlogLanguage = i18n.language?.startsWith("en") ? "en" : "fr";

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["blog-posts", language],
    queryFn: () => fetchBlogPosts(language),
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <main className="relative flex-1">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-black mb-4 leading-tight">
              {t("blog.title")}
              <br />
              <span className="text-aitenders-primary-blue">{t("blog.subtitle")}</span>
            </h1>
            <p className="text-lg text-aitenders-dark-blue max-w-2xl mx-auto mt-1">
              {t("blog.description")}
            </p>
          </div>

          {isLoading ? (
            <LoadingGrid />
          ) : isError ? (
            <StatusBox title={t("blog.errorTitle")} description={t("blog.errorDescription")} />
          ) : !posts || posts.length === 0 ? (
            <StatusBox title={t("blog.emptyTitle")} description={t("blog.emptyDescription")} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} language={language} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer_4 />
    </div>
  );
}
