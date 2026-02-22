import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

export default function Experience() {
    return (
        <section id="experience">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>

            <div className="experience-list">
                <motion.div
                    className="experience-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <div className="experience-header">
                        <h3 className="experience-role">Operations Assistant (Intern)</h3>
                        <span className="experience-date">Apr 2025 — Jul 2025</span>
                    </div>
                    <p className="experience-company">
                        Hunan Shengpeng Electric Power Technology Co., Ltd. — Changsha, Hunan, China
                    </p>
                    <ul className="experience-highlights">
                        <li>Supported day-to-day operations by organizing project documents (contracts, invoices, quotations) and maintaining a filing system</li>
                        <li>Assisted with basic procurement and vendor communication (requesting quotes, tracking delivery status)</li>
                        <li>Prepared summary sheets for project expenses and timelines using Microsoft Excel</li>
                        <li>Shadowed project coordination tasks and learned standard workflows in power engineering projects</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}
