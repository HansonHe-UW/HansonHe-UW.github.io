import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const LogoMark = () => (
    <svg
        viewBox="0 0 256 256"
        aria-hidden="true"
        focusable="false"
        className="nav-logo-img"
    >
        <g
            fontFamily="'Nimbus Roman', 'Liberation Serif', 'Times New Roman', serif"
            fontWeight="400"
        >
            <text x="108" y="172" fontSize="124" fill="none" stroke="currentColor" strokeWidth="2.2" paintOrder="stroke fill">H</text>
            <text x="48" y="172" fontSize="124" fill="currentColor">S</text>
        </g>
    </svg>
)

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const ids = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'extracurricular', 'awards', 'contact']

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const threshold = window.innerHeight * 0.3
            let activeId = ids[0]

            for (const id of ids) {
                const el = document.getElementById(id)
                if (!el) continue
                const top = el.getBoundingClientRect().top
                if (top <= threshold) {
                    activeId = id
                } else {
                    break
                }
            }

            setActiveSection(activeId)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <button type="button" className="nav-logo" onClick={() => scrollTo('hero')} aria-label="Scroll to top">
                    <LogoMark />
                </button>
                <div className="nav-right">
                    <ul className="nav-links">
                        {['about', 'education', 'skills', 'projects', 'experience', 'extracurricular', 'awards', 'contact'].map((s) => (
                            <li key={s}>
                                <a
                                    href={`#${s}`}
                                    className={activeSection === s ? 'active' : ''}
                                    onClick={(e) => { e.preventDefault(); scrollTo(s) }}
                                >
                                    {s.charAt(0).toUpperCase() + s.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
