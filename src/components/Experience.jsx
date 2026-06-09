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

            <div className="flex flex-col gap-6 max-md:gap-0">
                <motion.div
                    className="p-6 border-l-2 border-line transition-colors duration-300 hover:border-l-accent max-md:py-7 max-md:px-0 max-md:border-l-0 max-md:border-t max-md:border-[var(--hairline)] max-md:first:border-t-0 max-md:first:pt-0 max-md:last:pb-0"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <div className="flex justify-between items-start mb-1 gap-4 max-md:flex-col max-md:gap-2 max-md:items-stretch">
                        <h3 className="text-[1.05rem] font-semibold text-fg">IT Support &amp; Automation Intern</h3>
                        <span className="font-mono text-[0.72rem] text-fg-faint whitespace-nowrap tracking-[-0.01em] max-md:self-end max-md:-mt-1">Apr 2025 — Jul 2025</span>
                    </div>
                    <p className="text-[0.9rem] text-fg-soft mb-3">
                        Hunan Shengpeng Electric Power Technology Co., Ltd. — Changsha, China
                    </p>

                    <AnimatePresence initial={false}>
                        {expanded && (
                            <motion.ul
                                className="bullet-list hidden max-md:block overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                {highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    <ul className="bullet-list block max-md:hidden">
                        {highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="expand-btn"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                    >
                        {expanded ? `▴ COLLAPSE` : `▾ EXPAND_DETAILS [${bulletCount}]`}
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
