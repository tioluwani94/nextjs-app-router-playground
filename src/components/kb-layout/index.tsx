import React, { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { Footer } from './footer';
import { Header } from './header';

export const KbLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className={css({bg: 'white', minHeight: '100vh', display: 'flex', flexFlow: 'column'})}>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}
