import { motion } from 'framer-motion'

const skillData = [
    { label: 'Embedded & Hardware', items: ['Arduino', 'Embedded C', 'Multimeter', 'Oscilloscope'] },
    { label: 'Programming', items: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL'] },
    { label: 'AI / Data & CV', items: ['Gemini API', 'sentence-transformers', 'ChromaDB', 'OpenCV', 'YOLOv8'] },
    { label: 'Web & Backend', items: ['FastAPI', 'REST APIs', 'WebSockets', 'Node.js'] },
    { label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'HTML/CSS'] },
    { label: 'Tools & Systems', items: ['Git', 'Linux/Unix', 'Bash/Shell', 'Firebase', 'AWS'] },
]

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const row = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
    return (
        <section id="skills">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={container}>
                <motion.h2 className="section-title" variants={row}>Skills</motion.h2>
                <div className="flex flex-col gap-[0.65rem] border-t border-[var(--hairline)] pt-2">
                    {skillData.map((cat) => (
                        <motion.div
                            className="grid grid-cols-[130px_1fr] max-md:grid-cols-1 gap-4 max-md:gap-2 items-baseline py-[0.45rem] border-b border-[var(--hairline)]"
                            key={cat.label}
                            variants={row}
                        >
                            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-fg-faint">{cat.label}</span>
                            <div className="flex gap-x-[0.55rem] gap-y-[0.3rem] flex-wrap items-baseline">
                                {cat.items.map((item) => (
                                    <span className="tag-bracket font-mono text-[0.78rem] text-fg tracking-[-0.01em] transition-colors duration-300 hover:text-accent" key={item}>{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
