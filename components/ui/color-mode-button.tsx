"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './button';

export const ColorModeButton = () => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        setTheme(() => JSON.parse(window.localStorage.getItem('park-ui-color-mode') ?? 'dark'))
    }, [])

    const handleToggleColorMode = () => {
        const element = document.documentElement
        element.classList.toggle('dark')
        const colorMode = element.classList.contains('dark') ? 'dark' : 'light'
        setTheme(colorMode)
        window.localStorage.setItem('park-ui-color-mode', JSON.stringify(colorMode))
    }

    return (
        <Button onClick={handleToggleColorMode}>{theme}</Button>
    )
}
