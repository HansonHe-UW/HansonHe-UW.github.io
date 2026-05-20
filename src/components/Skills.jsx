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
                <div className="skills-grid">
                    {skillData.map((cat) => (
                        <motion.div className="skill-category" key={cat.label} variants={row}>
                            <span className="skill-label">{cat.label}</span>
                            <div className="skill-tags">
                                {cat.items.map((item) => (
                                    <span className="skill-tag" key={item}>{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
