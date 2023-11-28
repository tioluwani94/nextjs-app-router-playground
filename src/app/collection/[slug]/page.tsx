import { getArticlesByCollectionSlug, getCollection, getHelpcenterSettings } from '@/src/api/queries';
import { ChevronRight, CollectionIcon, DotIcon } from '@/src/components/icons';
import { css, cx } from '@/styled-system/css';
import { flex, stack } from '@/styled-system/patterns';
import { SystemStyleObject } from '@/styled-system/types';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const collection = await getCollection(params.slug);
  return {
    title: collection.name,
  }
}

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = await getCollection(params.slug);
  const articles = await getArticlesByCollectionSlug(params.slug);
  const settings = await getHelpcenterSettings();

  const styles: {
    headerMeta: SystemStyleObject,
    headerTitle: SystemStyleObject,
    headerSubtitle: SystemStyleObject,
    headerIconContainer:  SystemStyleObject,
    articleList: SystemStyleObject,
    articleListItem: SystemStyleObject
  } = {
    headerIconContainer: {
      w: '48px',
      h: '48px',
    },
    headerTitle: {
      fontSize: '3xl',
      fontWeight: 700,
    },
    headerSubtitle: {
      fontSize: 'md',
      color: 'gray.700',
    },
    headerMeta: {
      fontSize: "md", 
      color: "gray.700" 
    },
    articleList: {
      rounded: 'md',
      borderWidth: '1px',
      borderColor: 'gray.200',
      p: { base: '8px', md: '12px', lg: '12px' },
    },
    articleListItem: {
      rounded: 'md',
      fontSize: 'md',
      p : { base: '8px', md: '12px', lg: '12px' }
    }
  }

  return (
    <div className={cx("content", stack({ gap: '32px', direction: 'column' }))}>
      <div className={cx("content-header", stack({ gap: '8px', direction: 'column' }))}>
        <div className={cx("content-header-icon-container", css(styles.headerIconContainer))} style={{ color: settings.secondary_color }}>
          <CollectionIcon />
        </div>
        <div className={stack({ gap: '2px' })}>
          <h1 className={cx("content-header-title", css(styles.headerTitle))}>{collection.name}</h1>
          <div className={stack({ direction: 'row', align: 'center' })}>
            {!!collection.description && (
                <p className={cx("content-header-subtitle", css(styles.headerSubtitle))}>{collection.description}</p>
            )}
            {!!articles.length && !!collection.description && <div className={css({w: '4px', h: '4px'})}><DotIcon /></div>}
            {!!articles.length && <p className={cx("content-header-meta", css(styles.headerMeta))}>{articles.length} {articles.length > 1 ? 'articles' : 'article'}</p>}
          </div>
        </div>
      </div>
      {!!articles.length && 
        <div className={cx('content-list', css(styles.articleList))}>
          {articles.map(a => (
            <Link 
              key={a.slug} 
              href={`/article/${a.slug}`} 
              className={cx("content-list-item", flex({ align: 'center', justify: 'space-between' }), css(styles.articleListItem))}
            >
              {a.title}
              <div className={css({ w: '16px', h: '16px' })} style={{ color: settings.secondary_color }}>
                <ChevronRight />
              </div>
            </Link>
          ))}
        </div>
      }
    </div>
  )
}
