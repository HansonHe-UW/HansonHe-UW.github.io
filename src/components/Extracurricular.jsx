import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

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
                <motion.div
                    className="experience-card experience-card-with-logo"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <img src="/logos/uwcsc.png" alt="UW Computer Science Club" className="experience-logo" />
                    <div className="experience-body">
                        <div className="experience-header">
                            <h3 className="experience-role">Event Coordinator</h3>
                            <span className="experience-date">May 2026 — Present</span>
                        </div>
                        <p className="experience-company">
                            UW Computer Science Club — University of Waterloo
                        </p>
                        <ul className="experience-highlights">
                            <li>Coordinating club events and member engagement activities (details coming soon)</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
