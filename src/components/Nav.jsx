import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
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
        className="w-9 h-9 block"
    >
        <g
            fontFamily="'Fraunces', Georgia, serif"
            fontWeight="500"
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

const iconButton = 'bg-transparent border border-line text-fg-soft w-8 h-8 rounded-lg items-center justify-center cursor-pointer p-0 transition-all duration-300 hover:text-fg hover:border-line-strong hover:bg-[var(--logo-bg)]'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const burgerRef = useRef(null)
    const firstLinkRef = useRef(null)

    // Deep links: jump to the #section after sections render. Two passes because
    // the hero's height shrinks on scroll, which moves the target after the first
    // jump; it settles at 55vh, so the second pass lands precisely.
    useEffect(() => {
        const hash = window.location.hash.slice(1)
        if (!hash) return
        // Own the initial scroll for deep links only — normal (no-hash) reloads
        // keep the browser's native scroll restore (more precise than us).
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
        const el = document.getElementById(hash)
        if (!el) return
        el.scrollIntoView({ behavior: 'instant' })
        const t = setTimeout(() => el.scrollIntoView({ behavior: 'instant' }), 80)
        return () => clearTimeout(t)
    }, [])

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

            // Keep the URL hash in sync with what's on screen so a shared/reloaded
            // link always matches the visible section (hero clears the hash).
            const desiredHash = activeId === 'hero' ? '' : `#${activeId}`
            if (window.location.hash !== desiredHash) {
                // Safari throttles history updates (~100/30s); ignore the rare
                // SecurityError — the hash just lags until the next scroll.
                try {
                    window.history.replaceState(null, '', desiredHash || window.location.pathname + window.location.search)
                } catch { /* rate-limited */ }
            }
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

        // Move focus into the menu so keyboard/screen-reader users don't tab
        // through the page content hidden behind it.
        const burger = burgerRef.current
        firstLinkRef.current?.focus()

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
            window.removeEventListener('resize', onResize)
            // Return focus to the toggle — unless it's hidden (viewport widened
            // past the breakpoint while open), in which case leave focus alone.
            if (burger?.offsetParent !== null) burger?.focus()
        }
    }, [menuOpen])

    // No behavior arg: lets CSS scroll-behavior decide, so the reduced-motion
    // override (scroll-behavior: auto) actually applies to nav-click scrolling.
    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
    }

    const go = (id) => {
        setMenuOpen(false)
        scrollTo(id)
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] px-8 transition-[background,box-shadow] duration-300 ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-[16px] shadow-[0_1px_0_var(--border-color)]' : ''}`}>
            <div className="relative z-[100] max-w-[860px] mx-auto flex items-center justify-between h-[60px]">
                <button
                    type="button"
                    className="bg-none border-0 p-0 cursor-pointer inline-flex items-center leading-[0] text-fg transition-[transform,color] duration-300 hover:scale-105 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 focus-visible:rounded-md"
                    onClick={() => go('hero')}
                    aria-label="Scroll to top"
                >
                    <LogoMark />
                </button>
                <div className="flex items-center gap-6">
                    <ul className="flex gap-8 list-none max-md:hidden">
                        {SECTIONS.map((s) => (
                            <li key={s}>
                                <a
                                    href={`#${s}`}
                                    className={`text-[0.85rem] font-normal tracking-[0.02em] transition-colors duration-300 hover:text-fg ${activeSection === s ? 'text-fg' : 'text-fg-soft'}`}
                                    onClick={(e) => { e.preventDefault(); go(s) }}
                                >
                                    {label(s)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                    <button
                        ref={burgerRef}
                        type="button"
                        className={`hidden max-md:inline-flex [&_svg]:size-[17px] ${iconButton}`}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {createPortal(
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            id="mobile-menu"
                        className="fixed inset-0 z-[90] overflow-y-auto bg-page [background-image:radial-gradient(ellipse_80%_50%_at_50%_0%,var(--body-gradient-1)_0%,transparent_55%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="min-h-full flex flex-col justify-center pt-[60px] px-6 pb-12">
                            <motion.ol
                                className="menu-counter list-none flex flex-col gap-[0.35rem]"
                                initial="hidden"
                                animate="visible"
                                variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
                            >
                                {SECTIONS.map((s, i) => (
                                    <motion.li
                                        key={s}
                                        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                    >
                                        <a
                                            ref={i === 0 ? firstLinkRef : null}
                                            href={`#${s}`}
                                            className={`flex items-baseline gap-[0.7rem] py-[0.4rem] font-display text-[clamp(1.35rem,5.5vw,1.7rem)] font-medium tracking-[-0.01em] transition-colors duration-300 ${activeSection === s ? 'active text-accent' : 'text-fg'}`}
                                            onClick={(e) => { e.preventDefault(); go(s) }}
                                        >
                                            {label(s)}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ol>
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </nav>
    )
}
