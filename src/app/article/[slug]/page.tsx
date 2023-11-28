import { getArticle } from '@/src/api/queries';
import { css, cx } from '@/styled-system/css';
import { stack } from '@/styled-system/patterns';
import { SystemStyleObject } from '@/styled-system/types';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug);
  return {
    title: article.title,
  }
}

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  const styles: {
    headerMeta: SystemStyleObject,
    title: SystemStyleObject,
    description: SystemStyleObject,
  } = {
    title: {
      fontSize: '3xl',
      fontWeight: 700,
    },
    description: {
      fontSize: 'md',
      color: 'gray.700',
    },
    headerMeta: {
      fontSize: "md", 
      color: "gray.700" 
    },
  }

  return (
    <div className={cx("article", stack({ gap: '32px', direction: 'column' }))}>
      <div className={cx("article-header", stack({ gap: '8px', direction: 'column' }))}>
        <div className={stack({ gap: '2px' })}>
          <h1 className={cx("article-header-title", css(styles.title))}>{article.title}</h1>
          <div className={stack({ direction: 'row', align: 'center' })}>
            {!!article.description && (
                <p className={cx("article-header-description", css(styles.description))}>{article.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
