import React, { ReactNode } from 'react'
import { css, cx } from '../../../../styled-system/css';

export const HeroText: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <h1 className={cx('header-hero-text', css({
        fontSize: '36px',
        textAlign: 'center',
        fontWeight: 'medium',
        m: '20px auto 32px auto',
    }))}
    >
        {children}
    </h1>
  )
}
