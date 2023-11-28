import { css, cx } from "@/styled-system/css";
import { stack } from "@/styled-system/patterns";
import Link from "next/link";
import { getArticles, getCollections } from "../api/queries";
import { ArticleIcon, CollectionIcon } from "../components/icons";

export default async function Home() {
  const articles = await getArticles();
  const collections = await getCollections();

  return (
    <section className={stack({ gap: "12px" })}>
      {!!collections.length && (
        <div className={stack({ gap: "12px" })}>
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collection/${c.slug}`}
              className={cx(
                stack({ gap: "12px", direction: 'row', align: 'center' }),
                css({
                  p: "16px",
                  rounded: "8px",
                  borderWidth: "1px",
                  borderColor: "gray.200",
                })
              )}
            >
              <CollectionIcon />
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
              key={c.slug}
              href={`/article/${c.slug}`}
              className={cx(
                stack({ gap: "12px", direction: 'row', align: 'center' }),
                css({
                  p: "16px",
                  rounded: "8px",
                  borderWidth: "1px",
                  borderColor: "gray.200",
                })
              )}
            >
              <div className={cx(css({w: '32px', h:'32px', color: 'gray.800'}))}>
                <ArticleIcon  />
              </div>
              <div className={cx(stack({ gap: "0", direction: "column" }))}>
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
