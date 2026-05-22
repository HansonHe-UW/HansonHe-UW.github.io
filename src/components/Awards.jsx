import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Awards() {
    return (
        <section id="awards">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title">Awards</h2>
                <div className="award-entry">
                    <div>
                        <div className="award-name">President's Scholarship</div>
                        <div className="award-description">
                            University of Waterloo — Awarded for academic excellence (admission average 90%–94.9%)
                        </div>
                    </div>
                    <span className="award-date">June 2025</span>
                </div>
            </motion.div>
        </section>
    )
}
