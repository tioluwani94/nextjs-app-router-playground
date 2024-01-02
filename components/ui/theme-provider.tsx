"use client"
import React, { ReactNode, useEffect } from 'react'

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  useEffect(() => {
    const setColorMode = () => {
      const colorMode = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('park-ui-color-mode')) {
          return JSON.parse(localStorage.getItem('park-ui-color-mode') ?? '')
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark'
        }
        return 'light'
      })()

      if (colorMode === 'light') {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
      window.localStorage.setItem('park-ui-color-mode', JSON.stringify(colorMode))
    }
    setColorMode()
  }, [])
  
  return (
    <>{children}</>
  )
}
