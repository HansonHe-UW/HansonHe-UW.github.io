import { motion } from 'framer-motion'

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
)

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
)

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
)

const channels = [
    {
        label: 'EMAIL',
        value: 's296he@uwaterloo.ca',
        href: 'mailto:s296he@uwaterloo.ca',
        icon: <MailIcon />,
        external: false,
    },
    {
        label: 'LINKEDIN',
        value: 'shengyuan-he',
        href: 'https://www.linkedin.com/in/shengyuan-he',
        icon: <LinkedInIcon />,
        external: true,
    },
    {
        label: 'GITHUB',
        value: 'HansonHe-UW',
        href: 'https://github.com/HansonHe-UW',
        icon: <GitHubIcon />,
        external: true,
    },
]

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
    }),
}

export default function Contact() {
    return (
        <section id="contact">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                Contact
            </motion.h2>

            <motion.p
                className="contact-intro"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Open to co-op opportunities, hackathon teams, or a quick chat about anything technical. Email is the fastest way to reach me.
            </motion.p>

            <div className="contact-grid">
                {channels.map((c, i) => (
                    <motion.a
                        key={c.label}
                        href={c.href}
                        target={c.external ? '_blank' : undefined}
                        rel={c.external ? 'noopener noreferrer' : undefined}
                        className="contact-card"
                        custom={i}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        whileHover={{ y: -4 }}
                    >
                        <div className="contact-card-icon">{c.icon}</div>
                        <div className="contact-card-label">{c.label}</div>
                        <div className="contact-card-value">{c.value}</div>
                        <div className="contact-card-arrow"><ArrowIcon /></div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
