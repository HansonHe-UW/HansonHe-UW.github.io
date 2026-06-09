import { useEffect, useLayoutEffect, useState } from 'react'

const SunIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
)

const MoonIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)

const THEME_STORAGE_KEY = 'theme'
const THEMES = new Set(['light', 'dark'])

const getSystemTheme = () => {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const getStoredTheme = () => {
    try {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
        return THEMES.has(storedTheme) ? storedTheme : null
    } catch {
        return null
    }
}

const applyTheme = (theme) => {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
}

export default function ThemeToggle() {
    const [storedTheme, setStoredTheme] = useState(getStoredTheme)
    const [systemTheme, setSystemTheme] = useState(getSystemTheme)
    const theme = storedTheme || systemTheme

    useLayoutEffect(() => {
        applyTheme(theme)
    }, [theme])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
        const handleChange = () => setSystemTheme(getSystemTheme())

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }

        mediaQuery.addListener(handleChange)
        return () => mediaQuery.removeListener(handleChange)
    }, [])

    const toggle = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        setStoredTheme(nextTheme)
        try {
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
        } catch {
            // Ignore storage failures; the current DOM state is still correct.
        }
    }

    return (
        <button
            className="bg-transparent border border-line text-fg-soft w-8 h-8 rounded-lg inline-flex items-center justify-center cursor-pointer p-0 transition-all duration-300 [&_svg]:size-[15px] hover:text-fg hover:border-line-strong hover:bg-[var(--logo-bg)]"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}
