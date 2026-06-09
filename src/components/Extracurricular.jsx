import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

const activities = [
    {
        role: 'Firmware Engineer',
        org: 'Midnight Sun Solar Rayce Car Team — University of Waterloo',
        logo: '/logos/midnight-sun.png',
        date: 'May 2026 — Present',
        highlights: [],
    },
    {
        role: 'Event Coordinator',
        org: 'UW Computer Science Club — University of Waterloo',
        logo: '/logos/uwcsc.png',
        date: 'May 2026 — Present',
        highlights: [
            'Organize termly events across technical (workshops, Code Parties, industry talks) and community (trivia nights, picnics) streams for UW CS undergraduates',
            'Coordinate logistics, speaker/sponsor outreach, and cross-channel promotion (Discord, LinkedIn) for events drawing 50+ attendees',
        ],
    },
]

export default function Extracurricular() {
    return (
        <section id="extracurricular">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                Extracurricular
            </motion.h2>

            <div className="flex flex-col gap-6 max-md:gap-0">
                {activities.map((a) => (
                    <motion.div
                        key={a.role + a.org}
                        className="flex items-start gap-5 p-6 border-l-2 border-line transition-colors duration-300 hover:border-l-accent max-md:py-7 max-md:px-0 max-md:border-l-0 max-md:border-t max-md:border-[var(--hairline)] max-md:first:border-t-0 max-md:first:pt-0 max-md:last:pb-0"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <img
                            src={a.logo}
                            alt={a.org}
                            className="w-[52px] h-[52px] rounded-[10px] object-contain bg-[var(--logo-bg)] p-[6px] border border-line shrink-0 transition-all duration-300 hover:border-accent hover:bg-[var(--logo-bg-hover)] hover:scale-105"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1 gap-4 max-md:flex-col max-md:gap-2 max-md:items-stretch">
                                <h3 className="text-[1.05rem] font-semibold text-fg">{a.role}</h3>
                                {a.date && <span className="font-mono text-[0.72rem] text-fg-faint whitespace-nowrap tracking-[-0.01em] max-md:self-end max-md:-mt-1">{a.date}</span>}
                            </div>
                            <p className="text-[0.9rem] text-fg-soft mb-3">{a.org}</p>
                            {a.highlights.length > 0 && (
                                <ul className="bullet-list">
                                    {a.highlights.map((h, j) => (
                                        <li key={j}>{h}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
