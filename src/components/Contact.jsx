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
    { label: 'EMAIL', value: 's296he@uwaterloo.ca', href: 'mailto:s296he@uwaterloo.ca', icon: <MailIcon />, external: false },
    { label: 'LINKEDIN', value: 'Hanson He', href: 'https://www.linkedin.com/in/shengyuan-he', icon: <LinkedInIcon />, external: true },
    { label: 'GITHUB', value: 'HansonHe-UW', href: 'https://github.com/HansonHe-UW', icon: <GitHubIcon />, external: true },
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
                className="text-base text-fg-soft leading-[1.7] max-w-[540px] mb-9"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Open to co-op opportunities, hackathon teams, or a quick chat about anything technical. Email is the fastest way to reach me.
            </motion.p>

            <div className="contact-counter grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-0">
                {channels.map((c, i) => (
                    <motion.a
                        key={c.label}
                        href={c.href}
                        target={c.external ? '_blank' : undefined}
                        rel={c.external ? 'noopener noreferrer' : undefined}
                        className="group relative flex flex-col gap-2 py-7 px-6 border border-line rounded-xl bg-card text-fg overflow-hidden transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] max-md:grid max-md:grid-cols-[36px_minmax(0,1fr)_auto] max-md:gap-x-[0.85rem] max-md:gap-y-0 max-md:items-center max-md:py-4 max-md:px-1 max-md:bg-transparent max-md:border-0 max-md:border-t max-md:border-[var(--hairline)] max-md:rounded-none max-md:shadow-none max-md:first:border-t-0 max-md:hover:bg-transparent max-md:hover:border-[var(--hairline)] max-md:hover:shadow-none"
                        custom={i}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        whileHover={{ y: -4 }}
                    >
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-[linear-gradient(135deg,var(--accent-glow),transparent_60%)] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 max-md:hidden"
                        />
                        <div className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-[var(--accent-glow)] text-accent mb-[0.4rem] transition-transform duration-300 group-hover:scale-[1.08] [&_svg]:size-[18px] max-md:w-8 max-md:h-8 max-md:row-span-2 max-md:mb-0 max-md:rounded-[7px] max-md:[&_svg]:size-4">{c.icon}</div>
                        <div className="contact-label-counter font-mono text-[0.66rem] tracking-[0.12em] uppercase text-fg-faint max-md:text-[0.62rem] max-md:self-end">{c.label}</div>
                        <div className="text-[0.95rem] font-medium text-fg [overflow-wrap:anywhere] leading-[1.4] max-md:font-mono max-md:text-[0.82rem] max-md:tracking-[-0.01em] max-md:self-start max-md:col-start-2">{c.value}</div>
                        <div className="absolute top-5 right-5 text-fg-faint transition-[transform,color] duration-300 group-hover:text-accent group-hover:translate-x-[3px] group-hover:-translate-y-[3px] [&_svg]:size-[18px] max-md:static max-md:col-start-3 max-md:row-span-2 max-md:self-center max-md:[&_svg]:size-4 max-md:group-hover:translate-y-0"><ArrowIcon /></div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
