import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
)

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
)

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
)

const HeroWatermark = () => (
    <svg
        className="absolute right-[-6vw] top-1/2 -translate-y-1/2 w-[clamp(380px,55vw,720px)] max-md:w-[320px] max-md:right-[-8vw] h-auto text-fg opacity-[0.04] max-md:opacity-[0.05] light:opacity-[0.05] pointer-events-none z-0"
        viewBox="0 0 256 256"
        aria-hidden="true"
        focusable="false"
    >
        <g fontFamily="'Fraunces', Georgia, serif" fontWeight="500">
            <text x="108" y="172" fontSize="124" fill="none" stroke="currentColor" strokeWidth="1.2" paintOrder="stroke fill">H</text>
            <text x="48" y="172" fontSize="124" fill="currentColor">S</text>
        </g>
    </svg>
)

const roles = ['Embedded Systems', 'Full-Stack Apps', 'Side Projects']

const iconBtn = 'inline-flex items-center justify-center w-[42px] h-[42px] rounded-lg border border-line text-fg-soft bg-transparent transition-all duration-300 hover:text-accent hover:border-accent hover:bg-[var(--accent-glow)] [&_svg]:size-[18px]'

export default function Hero() {
    const [currentRole, setCurrentRole] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)
    const heroRef = useRef(null)

    useEffect(() => {
        const hero = heroRef.current
        if (!hero) return

        let ticking = false
        const update = () => {
            const progress = Math.min(1, window.scrollY / 700)
            // Clamp to 55vh so hero content always has a home — avoids
            // anchor weirdness when scroll-to-#hero lands on a collapsed section.
            hero.style.minHeight = `${Math.max(55, (1 - progress) * 100)}vh`
            ticking = false
        }
        const handler = () => {
            if (!ticking) {
                requestAnimationFrame(update)
                ticking = true
            }
        }

        update()
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        let pauseTimer
        const timer = setTimeout(() => {
            const i = loopNum % roles.length
            const fullText = roles[i]

            setCurrentRole(
                isDeleting
                    ? fullText.substring(0, currentRole.length - 1)
                    : fullText.substring(0, currentRole.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 150)

            if (!isDeleting && currentRole === fullText) {
                pauseTimer = setTimeout(() => setIsDeleting(true), 1500)
            } else if (isDeleting && currentRole === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(500)
            }
        }, typingSpeed)

        return () => {
            clearTimeout(timer)
            if (pauseTimer) clearTimeout(pauseTimer)
        }
    }, [currentRole, isDeleting, loopNum, typingSpeed])

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
    }

    return (
        <section
            className="relative flex flex-col justify-center min-h-screen pt-[60px]"
            id="hero"
            ref={heroRef}
        >
            <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] top-1/2 left-1/2 rounded-full z-0 pointer-events-none animate-pulse-glow bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(99,102,241,0)_70%)]"></div>
            <HeroWatermark />
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-[1]"
            >
                <motion.div className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-fg-faint mb-5" variants={item}>
                    S/00 <span className="text-accent mr-[0.15rem] ml-[0.05rem]">▸</span> INDEX
                </motion.div>
                <motion.p className="text-[0.9rem] text-fg-soft mb-2 font-normal" variants={item}>Hi, I'm</motion.p>
                <motion.h1
                    className="font-display text-[clamp(2.8rem,7.5vw,5rem)] max-md:text-[clamp(2.4rem,11vw,3.4rem)] max-md:break-words font-medium tracking-[-0.03em] leading-none mb-3"
                    variants={item}
                >
                    Shengyuan <span className="text-accent italic font-medium">(Hanson)</span> He
                </motion.h1>
                <motion.div
                    className="text-[clamp(1.2rem,3vw,1.8rem)] max-md:text-[1.1rem] font-medium text-fg-soft mb-6 h-10 max-md:h-auto max-md:min-h-10 flex max-md:flex-wrap items-center"
                    variants={item}
                >
                    Building <span className="text-fg ml-2 whitespace-nowrap">{currentRole}</span><span className="text-accent animate-blink ml-[2px]">|</span>
                </motion.div>
                <motion.p className="text-[1.15rem] text-fg-soft max-w-[520px] leading-[1.6] mb-7" variants={item}>
                    Electrical Engineering student at the University of Waterloo.
                </motion.p>
                <motion.div className="flex items-center flex-wrap gap-[0.6rem] mb-6" variants={item}>
                    <motion.a
                        className="inline-flex items-center gap-[0.55rem] px-[1.1rem] h-[42px] rounded-lg bg-transparent text-fg text-[0.88rem] font-medium border border-line transition-all duration-300 cursor-pointer hover:text-accent hover:border-accent hover:bg-[var(--accent-glow)] [&_svg]:size-4 [&_svg]:shrink-0"
                        href="/resume-Hanson.pdf"
                        download="Hanson-He-Resume.pdf"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <DownloadIcon /> Resume
                    </motion.a>
                    <motion.a
                        className={iconBtn}
                        href="mailto:s296he@uwaterloo.ca"
                        aria-label="Email"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MailIcon />
                    </motion.a>
                    <motion.a
                        className={iconBtn}
                        href="https://www.linkedin.com/in/shengyuan-he"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        className={iconBtn}
                        href="https://github.com/HansonHe-UW"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <GitHubIcon />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}
