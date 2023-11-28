import { css, cx } from "@/styled-system/css";
import { stack } from "@/styled-system/patterns";
import Link from "next/link";
import { Article, Collection } from "../types";

const getCollections = async (): Promise<Collection[]> => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/collection/public/findersme`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getArticles = async (): Promise<Article[]> => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/article/public/findersme?page=1`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const articles = await getArticles();
  const collections = await getCollections();

  return (
    <section className={stack({ gap: "12px" })}>
      {!!collections.length && (
        <div className={stack({ gap: "12px" })}>
          {collections.map((c) => (
            <Link
              href={`/collection/${c.slug}`}
              key={c.slug}
              className={cx(
                stack({ gap: "8px" }),
                css({
                  p: "12px 16px",
                  borderWidth: "1px",
                  rounded: "16px",
                  borderColor: "gray.200",
                })
              )}
            >
              <div className={cx(stack({ gap: "4px", direction: "column" }))}>
                <h3
                  className={cx(
                    "category-name",
                    css({ fontWeight: 500, fontSize: "md" })
                  )}
                >
                  {c.name}
                </h3>
                <p
                  className={cx(
                    "category-description",
                    css({ fontSize: "sm", color: "gray.500" })
                  )}
                >
                  {c.description}
                </p>
                {!!c.blogPosts?.length && (
                  <p
                    className={cx(
                      "category-articles-count",
                      css({ fontSize: "xs", color: "gray.500" })
                    )}
                  >
                    {c.blogPosts?.length} articles
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
      {!!articles.length && (
        <div className={stack({ gap: "12px" })}>
          {articles.map((c) => (
            <Link
              href={`/article/${c.slug}`}
              key={c.slug}
              className={cx(
                stack({ gap: "8px" }),
                css({
                  p: "12px 16px",
                  borderWidth: "1px",
                  rounded: "16px",
                  borderColor: "gray.200",
                })
              )}
            >
              <div className={cx(stack({ gap: "4px", direction: "column" }))}>
                <h3
                  className={cx(
                    "article-card-title",
                    css({ fontWeight: 500, fontSize: "md" })
                  )}
                >
                  {c.title}
                </h3>
                <p
                  className={cx(
                    "article-card-description",
                    css({ fontSize: "sm", color: "gray.500" })
                  )}
                >
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
