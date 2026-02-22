import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Education() {
    return (
        <section id="education">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title">Education</h2>

                <div className="education-list">
                    <div className="education-entry">
                        <div className="education-left">
                            <img src="/logos/waterloo.png" alt="University of Waterloo" className="education-logo" />
                            <div>
                                <div className="education-school">University of Waterloo</div>
                                <div className="education-degree">BASc, Honours Electrical Engineering, Co-op</div>
                            </div>
                        </div>
                        <span className="education-date">Expected Apr 2030</span>
                    </div>

                    <div className="education-entry">
                        <div className="education-left">
                            <img src="/logos/dizhi.png" alt="Hunan Dizhi Middle School" className="education-logo" />
                            <div>
                                <div className="education-school">Hunan Dizhi Middle School</div>
                                <div className="education-degree">High School Diploma</div>
                            </div>
                        </div>
                        <span className="education-date">Sep 2022 — Jun 2025</span>
                    </div>
                </div>

                <div className="awards-section" id="awards">
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
                </div>
            </motion.div>
        </section>
    )
}
