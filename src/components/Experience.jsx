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
                        <h3 className="experience-role">IT Support & Automation Intern</h3>
                        <span className="experience-date">Apr 2025 — Jul 2025</span>
                    </div>
                    <p className="experience-company">
                        Hunan Shengpeng Electric Power Technology Co., Ltd. — Changsha, China
                    </p>
                    <ul className="experience-highlights">
                        <li>Automated new-device onboarding for a multi-device small office by writing batch and shell scripts that handled bulk application installs, printer driver provisioning, and VPN configuration — replacing a manual checklist that previously took ~30 minutes per device</li>
                        <li>Built a lightweight asset and incident tracker in a shared spreadsheet (with structured columns for device, owner, symptom, fix, and date) to give the team a single source of truth and surface recurring issues that warranted a permanent fix instead of a one-off ticket</li>
                        <li>Authored standardized troubleshooting checklists for the most common end-user issues — Wi-Fi connectivity, shared-drive permissions, account access — so non-technical staff could resolve simple cases first-try without escalating</li>
                        <li>Troubleshot Windows and macOS endpoints, printers, and small-office network connectivity hands-on, learning to triage by isolating layers (cable → DHCP → DNS → app) instead of guessing at fixes</li>
                        <li>Wrote handoff documentation in Chinese and English so the next intern could pick up the tooling and tracker without losing context</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}
