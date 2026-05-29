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

            <div className="experience-list">
                {activities.map((a) => (
                    <motion.div
                        key={a.role + a.org}
                        className="experience-card experience-card-with-logo"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <img src={a.logo} alt={a.org} className="experience-logo" />
                        <div className="experience-body">
                            <div className="experience-header">
                                <h3 className="experience-role">{a.role}</h3>
                                {a.date && <span className="experience-date">{a.date}</span>}
                            </div>
                            <p className="experience-company">{a.org}</p>
                            {a.highlights.length > 0 && (
                                <ul className="experience-highlights">
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
