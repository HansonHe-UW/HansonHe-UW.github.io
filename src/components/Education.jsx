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

                <article className="education-entry">
                    <picture className="education-logo">
                        <img
                            src="/logos/waterloo-eng-vert-dark.png"
                            alt="University of Waterloo, Faculty of Engineering"
                            className="education-logo-img education-logo-dark"
                        />
                        <img
                            src="/logos/waterloo-eng-vert-light.png"
                            alt=""
                            aria-hidden="true"
                            className="education-logo-img education-logo-light"
                        />
                    </picture>
                    <div className="education-body">
                        <div className="education-meta">
                            <span className="education-degree">BASc Honours, Electrical Engineering — Co-op</span>
                            <span className="education-meta-dot" aria-hidden="true">·</span>
                            <span className="education-date">Expected Apr 2031</span>
                        </div>
                        <div className="education-coursework">
                            <span className="education-coursework-label">Relevant Coursework</span>
                            <ul className="education-coursework-list">
                                <li>Linear Algebra</li>
                                <li>Calculus 1 for Engineering</li>
                                <li>Programming Fundamentals in C++</li>
                                <li>Classical Mechanics</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </motion.div>
        </section>
    )
}
