import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function About() {
    return (
        <section id="about">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title">About</h2>
                <p className="about-text">
                    I'm a first-year Electrical Engineering co-op student at the University of Waterloo,
                    based in Waterloo, ON. I'm passionate about building practical systems that bridge
                    hardware and software — from embedded devices to full-stack web applications powered by AI.
                    I enjoy tackling hackathons, learning new technologies, and turning ideas into working products.
                </p>
            </motion.div>
        </section>
    )
}
