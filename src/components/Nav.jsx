import { useState, useEffect } from 'react'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'awards']
            const scrollPosition = window.scrollY + window.innerHeight / 3 // Check what's in the top 1/3 of screen

            for (const section of sections.reverse()) { // Check bottom-up
                const el = document.getElementById(section)
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(section)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Init on load

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <span className="nav-logo" onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
                    H.
                </span>
                <ul className="nav-links">
                    {['about', 'skills', 'projects', 'experience', 'education', 'awards'].map((s) => (
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
            </div>
        </nav>
    )
}
