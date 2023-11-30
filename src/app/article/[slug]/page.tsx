import { getArticle } from '@/src/api/queries';
import { Avatar } from '@/src/components/avatar';
import { BreadCrumb, BreadCrumbItem, BreadCrumbLink } from '@/src/components/breadcrumb';
import { ChevronRight } from '@/src/components/icons';
import { formatMessageDateTime } from '@/src/helpers';
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

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  const styles: {
    headerMeta: SystemStyleObject,
    title: SystemStyleObject,
    description: SystemStyleObject,
  } = {
    title: {
      fontSize: '3xl',
      fontWeight: 700,
      color: 'gray.800',
    },
    description: {
      fontSize: 'md',
      color: 'gray.500',
    },
    headerMeta: {
      fontSize: "md", 
      color: "gray.700" 
    },
  }

  return (
    <div className={cx("article", stack({ gap: '32px', direction: 'column' }))}>
      <BreadCrumb spacing="8px" separator={<div className={css({w:'12px', h:'12px'})}><ChevronRight/></div>}>
        <BreadCrumbItem>
          <BreadCrumbLink href='/'>Home</BreadCrumbLink>
        </BreadCrumbItem>
        {article.collection_data?.slug && <BreadCrumbItem>
          <BreadCrumbLink href={`/collection/${article.collection_data?.slug}`}>{article.collection_data?.name}</BreadCrumbLink>
        </BreadCrumbItem>}
        <BreadCrumbItem isCurrentPage>
          <BreadCrumbLink>{article.title}</BreadCrumbLink>
        </BreadCrumbItem>
      </BreadCrumb>
      <div className={cx("article-header", stack({ gap: '8px', direction: 'column' }))}>
        <div className={stack({ gap: '16px' })}>  
          <div className={stack({ gap: '0' })}>
            <h1 className={cx("article-header-title", css(styles.title))}>{article.title}</h1>
            <div className={stack({ direction: 'row', align: 'center' })}>
              {!!article.description && (
                  <p className={cx("article-header-description", css(styles.description))}>{article.description}</p>
              )}
            </div>
          </div>
          <div className={cx(stack({ gap: '8px', direction: 'row' }))}>
            <Avatar size='lg' css={{bg: 'red', color: 'white'}} name={article.author?.first_name ?? ''} src={article.author?.image} />
            <div className={cx(stack({ gap: '0', direction: 'column' }))}>
              <p className={cx(css({ fontSize: 'sm', color: 'gray.500' }))}>Written by {article.author?.first_name}</p>
              <p className={cx(css({ fontSize: 'sm', color: 'gray.500' }))}>Updated {formatMessageDateTime(new Date(article.updated_datetime))} </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("article-content", css({ color: 'gray.800' }))}>
        <div dangerouslySetInnerHTML={{ __html: article.content ?? ''}}/>
      </div>
    </div>
  )
}
