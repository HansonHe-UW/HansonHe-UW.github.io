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
                <div className="flex max-md:flex-col justify-between items-start max-md:items-stretch gap-4 max-md:gap-2">
                    <div>
                        <div className="text-base font-semibold text-fg mb-[0.15rem]">President's Scholarship</div>
                        <div className="text-[0.85rem] text-fg-soft">
                            University of Waterloo — Awarded for academic excellence (admission average 90%–94.9%)
                        </div>
                    </div>
                    <span className="font-mono text-[0.72rem] text-fg-faint whitespace-nowrap tracking-[-0.01em] max-md:self-end max-md:-mt-1">Jun 2025</span>
                </div>
            </motion.div>
        </section>
    )
}
