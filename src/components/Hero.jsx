import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

export default function Hero() {
    const roles = ['Embedded Systems', 'Full-Stack Software', 'Intelligent Systems']
    const [currentRole, setCurrentRole] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        let timer = setTimeout(() => {
            const i = loopNum % roles.length
            const fullText = roles[i]

            setCurrentRole(
                isDeleting
                    ? fullText.substring(0, currentRole.length - 1)
                    : fullText.substring(0, currentRole.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 150)

            if (!isDeleting && currentRole === fullText) {
                setTimeout(() => setIsDeleting(true), 1500)
            } else if (isDeleting && currentRole === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(500)
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [currentRole, isDeleting, loopNum, typingSpeed, roles])

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
    }

    const linkItem = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-glow-bg"></div>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <motion.p className="hero-greeting" variants={item}>Hi, I'm</motion.p>
                <motion.h1 className="hero-name" variants={item}>
                    Shengyuan <span className="accent">(Hanson)</span> He
                </motion.h1>
                <motion.div className="hero-typewriter" variants={item}>
                    Building <span className="typewriter-text">{currentRole}</span><span className="cursor">|</span>
                </motion.div>
                <motion.p className="hero-tagline" variants={item}>
                    Electrical Engineering student at the University of Waterloo.
                </motion.p>
                <motion.div className="hero-links" variants={item}>
                    <motion.a className="hero-link" href="mailto:s296he@uwaterloo.ca" variants={linkItem} whileHover={{ y: -2 }}>
                        <MailIcon /> s296he@uwaterloo.ca
                    </motion.a>
                    <motion.a className="hero-link" href="https://www.linkedin.com/in/shengyuan-he" target="_blank" rel="noopener noreferrer" variants={linkItem} whileHover={{ y: -2 }}>
                        <LinkedInIcon /> LinkedIn
                    </motion.a>
                    <motion.a className="hero-link" href="https://github.com/HansonHe-UW" target="_blank" rel="noopener noreferrer" variants={linkItem} whileHover={{ y: -2 }}>
                        <GitHubIcon /> GitHub
                    </motion.a>
                    <motion.a className="hero-link" href="tel:+14373855777" variants={linkItem} whileHover={{ y: -2 }}>
                        <PhoneIcon /> +1 437-385-5777
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}
