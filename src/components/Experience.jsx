import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

const highlights = [
    'Automated new-device onboarding for a multi-device small office by writing batch and shell scripts that handled bulk application installs, printer driver provisioning, and VPN configuration — replacing a manual checklist that previously took ~30 minutes per device',
    'Built a lightweight asset and incident tracker in a shared spreadsheet (with structured columns for device, owner, symptom, fix, and date) to give the team a single source of truth and surface recurring issues that warranted a permanent fix instead of a one-off ticket',
    'Authored standardized troubleshooting checklists for the most common end-user issues — Wi-Fi connectivity, shared-drive permissions, account access — so non-technical staff could resolve simple cases first-try without escalating',
    'Troubleshot Windows and macOS endpoints, printers, and small-office network connectivity hands-on, learning to triage by isolating layers (cable → DHCP → DNS → app) instead of guessing at fixes',
    'Wrote handoff documentation in Chinese and English so the next intern could pick up the tooling and tracker without losing context',
]

export default function Experience() {
    const [expanded, setExpanded] = useState(false)
    const bulletCount = String(highlights.length).padStart(2, '0')

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
                    className={`experience-card ${expanded ? 'is-expanded' : ''}`}
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

                    <AnimatePresence initial={false}>
                        {expanded && (
                            <motion.ul
                                className="experience-highlights experience-highlights-collapsible"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ overflow: 'hidden' }}
                            >
                                {highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    <ul className="experience-highlights experience-highlights-always">
                        {highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="experience-expand-btn project-expand-btn"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                    >
                        {expanded
                            ? `▴ COLLAPSE`
                            : `▾ EXPAND_DETAILS [${bulletCount}]`}
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
