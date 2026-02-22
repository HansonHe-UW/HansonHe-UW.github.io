import { motion } from 'framer-motion'

const skillData = [
    { label: 'Programming', items: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'Java', 'Rust', 'MATLAB'] },
    { label: 'Web & Mobile', items: ['React', 'Next.js', 'Node.js', 'Express', 'React Native', 'Tailwind'] },
    { label: 'Cloud & APIs', items: ['Firebase', 'REST APIs', 'GraphQL', 'AWS', 'WebSockets', 'Postman'] },
    { label: 'Hard. & Systems', items: ['Raspberry Pi Pico', 'Arduino', 'RTOS', 'FPGA', 'I²C / SPI / UART'] },
    { label: 'Tools & DevOps', items: ['Git/GitHub', 'Linux (Bash)', 'Docker', 'CI/CD', 'ROS / ROS2', 'KiCad'] },
    { label: 'Data & AI', items: ['NumPy', 'Pandas', 'PyTorch', 'Computer Vision / YOLO', 'LTspice', 'LLMs'] },
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
