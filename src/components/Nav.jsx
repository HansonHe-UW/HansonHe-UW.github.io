import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

// Single source of truth for nav targets. TRACKED_IDS adds the hero so
// scroll-spy can mark "top of page"; SECTIONS is what we render as links.
const SECTIONS = ['about', 'education', 'skills', 'projects', 'experience', 'extracurricular', 'awards', 'contact']
const TRACKED_IDS = ['hero', ...SECTIONS]

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

const MenuIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
    </svg>
)

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

const label = (s) => s.charAt(0).toUpperCase() + s.slice(1)

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const threshold = window.innerHeight * 0.3
            let activeId = TRACKED_IDS[0]

            for (const id of TRACKED_IDS) {
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

    // While the full-screen menu is open: lock body scroll, close on Escape,
    // and close if the viewport grows past the mobile breakpoint.
    useEffect(() => {
        if (!menuOpen) return

        const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
        const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        window.addEventListener('resize', onResize)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
            window.removeEventListener('resize', onResize)
        }
    }, [menuOpen])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const go = (id) => {
        setMenuOpen(false)
        scrollTo(id)
    }

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <button type="button" className="nav-logo" onClick={() => go('hero')} aria-label="Scroll to top">
                    <LogoMark />
                </button>
                <div className="nav-right">
                    <ul className="nav-links">
                        {SECTIONS.map((s) => (
                            <li key={s}>
                                <a
                                    href={`#${s}`}
                                    className={activeSection === s ? 'active' : ''}
                                    onClick={(e) => { e.preventDefault(); go(s) }}
                                >
                                    {label(s)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                    <button
                        type="button"
                        className="nav-burger"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <motion.ol
                            className="mobile-menu-list"
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
                        >
                            {SECTIONS.map((s) => (
                                <motion.li
                                    key={s}
                                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                >
                                    <a
                                        href={`#${s}`}
                                        className={activeSection === s ? 'active' : ''}
                                        onClick={(e) => { e.preventDefault(); go(s) }}
                                    >
                                        {label(s)}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ol>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
