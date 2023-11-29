"use client";

import { css, cx } from "@/styled-system/css";
import { flex, stack } from "@/styled-system/patterns";
import { SystemStyleObject } from "@/styled-system/types";
import Link, { LinkProps } from "next/link";
import React, { Children, cloneElement, isValidElement, ReactElement, ReactNode } from "react";

export const BreadCrumb: React.FC<{cssProp?: SystemStyleObject; children: ReactNode; separator?: string | ReactElement; spacing?: SystemStyleObject['gap']}> = ({children, cssProp, separator = "/", spacing = '4px'}) => {

    const validChildren = getValidChildren(children);
    const count = validChildren.length

    const clones = validChildren.map((child, index) => cloneElement(child, {
            spacing,
            separator,
            isLastChild: count === index + 1,
        }),
    )

    return (
        <div className={cx('bread-crumb', stack({ align: 'center', direction: 'row', gap: spacing }), css(cssProp))}>{clones}</div>
    )
}

export const BreadCrumbItem: React.FC<{children: ReactNode; cssProp?: SystemStyleObject; isCurrentPage?: boolean; separator?: string | ReactElement; isLastChild?: boolean; spacing?: SystemStyleObject['gap']}> = ({children, cssProp, isCurrentPage, separator, isLastChild, spacing}) => {
    const validChildren = getValidChildren(children);

    const clones = validChildren.map((child) => {
        return cloneElement(child, {
            isCurrentPage,
        });
    });

    return (
        <div className={cx('bread-crumb-item', flex({ align: 'center', direction: 'row', gap: spacing }), css({fontSize: 'sm', transition: 'color 0.2s ease-in', color: {base: isCurrentPage ? 'gray.500' : 'gray.800', _hover: 'gray.500'}}), css(cssProp))}>
            {clones}
            {!isLastChild && (
                <BreadCrumbSeparator>
                    {separator}
                </BreadCrumbSeparator>
            )}
        </div>
    )
}

export const BreadCrumbLink: React.FC<{ children: ReactNode; cssProp?: SystemStyleObject; isCurrentPage?: boolean} & Partial<LinkProps>> = ({children, cssProp, isCurrentPage, href, ...rest}) => {
    if (isCurrentPage) {
        return (
          <span aria-current="page" className={cx('bread-crumb-link', css(cssProp))}>{children}</span>
        )
      }
  
    return <Link href={href ?? ''} className={cx('bread-crumb-link', css(cssProp))} {...rest}>{children}</Link>
}

BreadCrumbLink.displayName = 'BreadCrumbLink'

export const BreadCrumbSeparator: React.FC<{children: ReactNode; cssProp?: SystemStyleObject}> = ({children, cssProp}) => {
    return <div className={cx('bread-crumb-separator', css({color: 'gray.500', ...cssProp}))}>{children}</div>
}

export function getValidChildren(children: React.ReactNode) {
    return Children.toArray(children).filter((child) =>
      isValidElement(child),
    ) as React.ReactElement[]
  }