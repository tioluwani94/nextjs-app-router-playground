import { css, cx } from "@/styled-system/css";
import { stack } from "@/styled-system/patterns";
import Link from "next/link";
import { getArticles, getCollections, getHelpcenterSettings } from "../api/queries";
import { ArticleIcon, CollectionIcon } from "../components/icons";

export default async function Home() {
  const articles = await getArticles();
  const collections = await getCollections();
  const settings = await getHelpcenterSettings()

  const styles = {
    sectionTitle: { 
      fontWeight: 600, 
      fontSize: '2xl', 
      color: 'gray.800'
    },
    card: {
      p: "16px",
      rounded: "8px",
      borderWidth: "1px",
      borderColor: "gray.200",
    },
    cardIconContainer: {
      w: '32px', 
      h:'32px'
    },
    cardTitle: { 
      fontWeight: 500, 
      fontSize: "md" 
    },
    cardDescription: { 
      fontSize: "sm", 
      color: "gray.700" 
    },
    cardMeta: { 
      fontSize: "xs", 
      color: "gray.500" 
    }
  }

  return (
    <section className={stack({ gap: "32px" })}>
      {!!collections.length && (
        <div className={stack({ gap: '12px' })}>
          <h1 className={cx('section-title', css(styles.sectionTitle))}>Collections</h1>
          <div className={stack({ gap: "12px" })}>
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/collection/${c.slug}`}
                className={cx("collection-card",
                  stack({ gap: "24px", direction: 'row' }),
                  css(styles.card)
                )}
              >
                <div
                  style={{ color: settings.secondary_color }}
                  className={cx("collection-card-icon-container", css(styles.cardIconContainer))} 
                >
                  <CollectionIcon />
                </div>
                <div className={cx("collection-card-content", stack({ gap: "2px", direction: "column" }))}>
                  <h3 className={cx("collection-card-name", css(styles.cardTitle))}>
                    {c.name}
                  </h3>
                  <p className={cx("collection-card-description", css(styles.cardDescription))}>
                    {c.description}
                  </p>
                  {!!c.blogPosts?.length && (
                    <p className={cx("collection-card-article-count", css(styles.cardMeta))}>
                      {c.blogPosts?.length} {c.blogPosts?.length > 1 ? 'articles' : 'article'}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {!!articles.length && (
        <div className={stack({gap: '12px'})}>
          <h1 className={cx('section-title', css(styles.sectionTitle))}>Articles</h1>
          <div className={stack({ gap: "12px" })}>
            {articles.map((c) => (
              <Link
                key={c.slug}
                href={`/article/${c.slug}`}
                className={cx("article-card",
                  stack({ gap: "24px", direction: 'row' }),
                  css(styles.card)
                )}
              >
                <div
                  style={{ color: settings.secondary_color }}
                  className={cx("article-card-icon-container", css(styles.cardIconContainer))}
                >
                  <ArticleIcon />
                </div>
                <div className={cx("article-card-content", stack({ gap: "2px", direction: "column" }))}>
                  <h3 className={cx("article-card-title", css(styles.cardTitle))}>
                    {c.title}
                  </h3>
                  <p className={cx("article-card-description", css(styles.cardDescription))}>
                    {c.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
