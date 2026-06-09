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

                <article className="flex items-start gap-6 max-md:gap-4">
                    <picture className="shrink-0 block w-[140px] max-md:w-[90px] leading-[0] -ml-8 max-md:ml-0 max-md:mt-2">
                        <img
                            src="/logos/waterloo-eng-vert-dark.png"
                            alt="University of Waterloo, Faculty of Engineering"
                            className="w-full h-auto block light:hidden"
                        />
                        <img
                            src="/logos/waterloo-eng-vert-light.png"
                            alt=""
                            aria-hidden="true"
                            className="w-full h-auto hidden light:block"
                        />
                    </picture>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-y-[0.45rem] gap-x-[0.75rem] max-md:flex-col max-md:items-start max-md:gap-[0.3rem]">
                            <span className="font-display italic font-medium text-[1.15rem] max-md:text-[1.05rem] text-fg tracking-[-0.01em] leading-[1.3]">BASc Honours, Electrical Engineering — Co-op</span>
                            <span className="text-accent font-semibold select-none max-md:hidden" aria-hidden="true">·</span>
                            <span className="font-mono text-[0.72rem] text-fg-faint whitespace-nowrap tracking-[-0.01em] max-md:self-end max-md:-mt-1">Expected Apr 2031</span>
                        </div>
                        <div className="border-t border-[var(--hairline)] pt-[1.1rem] mt-[0.85rem]">
                            <span className="block font-mono text-[0.66rem] tracking-[0.1em] uppercase text-fg-faint mb-[0.55rem]">Relevant Coursework</span>
                            <ul className="dot-sep flex flex-wrap gap-y-[0.15rem] gap-x-[0.65rem] list-none text-[0.88rem] text-fg-soft leading-[1.6]">
                                <li className="inline-flex items-baseline">Linear Algebra</li>
                                <li className="inline-flex items-baseline">Calculus 1 for Engineering</li>
                                <li className="inline-flex items-baseline">Programming Fundamentals in C++</li>
                                <li className="inline-flex items-baseline">Classical Mechanics</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </motion.div>
        </section>
    )
}
