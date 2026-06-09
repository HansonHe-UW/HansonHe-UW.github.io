import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
)

const DevpostIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
    </svg>
)

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
)

const projects = [
    {
        title: 'SpatialVCS',
        subtitle: 'Full-Stack AI Spatial Computing System',
        date: 'Feb 2026',
        image: '/projects/spatialvcs-icon.png',
        award: '🏆 Best Beginner Hack — CTRL+HACK+DEL 2.0',
        links: [
            { icon: <YouTubeIcon />, href: 'https://www.youtube.com/watch?v=SzejfdNxOt8', label: 'Demo Video' },
            { icon: <DevpostIcon />, href: 'https://devpost.com/software/spatialvcs', label: 'Devpost' },
            { icon: <GitHubIcon />, href: 'https://github.com/HansonHe-UW/SpatialVCS', label: 'GitHub' },
        ],
        highlights: [
            'Built a "Git for Physical Reality" system that version-controls, diffs, and semantically searches real-world environments using a mobile phone as a spatial probe',
            'Architected a dual-stream hybrid AI pipeline: YOLOv8 + ByteTrack for real-time object tracking at 30fps and Google Gemini 1.5 Flash for semantic crop analysis, reducing API costs by 90%',
            'Configured secure local development with self-signed SSL certificates (mkcert) to resolve HTTPS constraints for mobile camera access',
            'Implemented 3D coordinate projection (2D pixel → 3D world space) using pose matrix math, and a custom Persistence Buffer algorithm to eliminate UI flicker',
            'Developed a RAG query engine using ChromaDB vector database enabling natural language spatial search',
            'Shipped an end-to-end demo (frontend + backend + realtime streaming) and debugged live connectivity issues under time pressure during judging',
        ],
        tech: ['Python', 'FastAPI', 'YOLOv8', 'Google Gemini API', 'ChromaDB', 'React 19', 'Three.js', 'SSL/TLS'],
    },
    {
        title: 'Wildfire Tactics',
        subtitle: 'Multi-Agent Wildfire Evacuation Simulator',
        date: 'Feb 2026',
        image: '/projects/wildfire.png',
        award: 'Hack Canada 2026 — Team of 4',
        links: [
            { icon: <YouTubeIcon />, href: 'https://www.youtube.com/watch?v=LIxPtAoWjEI', label: 'Demo Video' },
            { icon: <DevpostIcon />, href: 'https://devpost.com/software/wilfire-tactics-frontend', label: 'Devpost' },
            { icon: <GitHubIcon />, href: 'https://github.com/TonyXie652/Wilfire-Tactics-Frontend', label: 'GitHub' },
        ],
        highlights: [
            'Built a real-time wildfire evacuation simulator in TypeScript/React on top of Deck.gl + Mapbox, modeling fire spread, road-constrained routing, and the interaction between resident agents and AI-guided rescue agents on real city geometry',
            'Designed a cellular-automata-style fire propagation model where intensity diffuses through a grid with wind, fuel, and decay parameters, and projected back onto road segments to drive threat-aware path costs',
            'Implemented a shared flow-field routing system (single Dijkstra rollout from safe points) so hundreds of resident agents could re-plan continuously as roadblocks and fire fronts changed, instead of each agent running its own pathfinding',
            'Integrated LLM-based guide agents using function calling: the model receives a compressed view of live simulation state (nearby agents, fire intensity, candidate safe points) and decides where to lead its group, with results streamed back into the simulation loop',
            'Hardened the client for a hackathon demo by routing all LLM calls through a Vite dev-server proxy to keep API keys off the browser, and tuned simulation tick rate / agent batching to keep the map responsive at ~60fps with hundreds of agents on screen',
            'Shipped a polished demo with adjustable parameters (wind, ignition points, agent count) so judges could play with scenarios live during judging',
        ],
        tech: ['TypeScript', 'React', 'Deck.gl', 'Mapbox', 'LLM Function Calling', 'Vite'],
    },
    {
        title: 'CareerForge-AI',
        subtitle: 'Full-Stack AI Resume Platform',
        date: 'Dec 2025 — Jan 2026',
        image: '/projects/careerforge-icon.png',
        award: 'Gemini 3 Hackathon — Team of 4',
        links: [
            { icon: <YouTubeIcon />, href: 'https://www.youtube.com/watch?v=yqUrn0oUv18', label: 'Demo Video' },
            { icon: <DevpostIcon />, href: 'https://devpost.com/software/geminicraft-professional-cover-letter-architect', label: 'Devpost' },
            { icon: <GitHubIcon />, href: 'https://github.com/JSZ-Research/CareerForge-AI', label: 'GitHub' },
        ],
        highlights: [
            'Developed a full-stack web app using React, Node.js/Express, and Firebase to help job seekers optimize resumes with AI-powered analysis and job matching',
            'Implemented secure authentication with Firebase Authentication and real-time data storage using Firestore',
            'Integrated Google Generative AI API for intelligent resume parsing (PDF/DOCX), scoring, and job description matching',
            'Built RESTful API endpoints for resume upload, analysis, generation, and job matching with proper error handling',
            'Designed responsive UI with React for seamless resume building, analysis viewing, and cover letter generation',
        ],
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Google AI API', 'REST API', 'Git'],
    },
]

const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

function ProjectCard({ p }) {
    const [expanded, setExpanded] = useState(false)
    const bulletCount = String(p.highlights.length).padStart(2, '0')

    return (
        <motion.div
            className="group border border-line rounded-xl bg-card p-6 flex flex-col transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:border-accent hover:bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] max-md:p-0 max-md:py-7 max-md:bg-transparent max-md:border-0 max-md:rounded-none max-md:shadow-none max-md:border-t max-md:border-[var(--hairline)] max-md:first:border-t-0 max-md:first:pt-0 max-md:last:pb-0 max-md:hover:bg-transparent max-md:hover:border-[var(--hairline)] max-md:hover:translate-y-0 max-md:hover:shadow-none"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
        >
            <div className="flex flex-col">
                <div className="flex justify-between items-start mb-3 gap-4 max-md:flex-col max-md:gap-2 max-md:items-stretch">
                    <div className="flex items-start gap-[0.9rem] min-w-0 flex-1">
                        {p.image && (
                            <img src={p.image} alt={`${p.title} thumbnail`} className="shrink-0 w-14 h-14 rounded-[14px] object-cover transition-transform duration-300 group-hover:scale-105 max-md:w-12 max-md:h-12" />
                        )}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-[0.6rem]">
                                <div className="text-[1.1rem] font-semibold text-fg">{p.title}</div>
                                {p.links && p.links.length > 0 && (
                                    <div className="flex gap-[0.4rem] items-center">
                                        {p.links.map((link, k) => (
                                            <a
                                                key={k}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-7 h-7 rounded-md text-fg-faint bg-transparent transition-all duration-300 hover:text-accent hover:bg-[var(--accent-glow)] [&_svg]:size-4"
                                                title={link.label}
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="text-[0.85rem] text-fg-soft mb-1">{p.subtitle}</div>
                        </div>
                    </div>
                    <span className="font-mono text-[0.72rem] text-fg-faint whitespace-nowrap tracking-[-0.01em] max-md:self-end max-md:-mt-1">{p.date}</span>
                </div>

                {p.award && <div className="inline-flex items-center gap-[0.4rem] font-mono text-[0.72rem] text-fg-soft tracking-[-0.01em] mb-[0.85rem]">{p.award}</div>}

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.ul
                            className="bullet-list hidden max-md:block mb-4 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            {p.highlights.map((h, j) => (
                                <li key={j}>{h}</li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <ul className="bullet-list block max-md:hidden mb-4">
                    {p.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                    ))}
                </ul>

                <div className="flex gap-[0.4rem] flex-wrap mt-1">
                    {p.tech.map((t) => (
                        <span key={t} className="tag-bracket font-mono text-[0.72rem] text-fg-soft tracking-[-0.02em]">{t}</span>
                    ))}
                </div>

                <button
                    type="button"
                    className="expand-btn"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                >
                    {expanded ? `▴ COLLAPSE` : `▾ EXPAND_DETAILS [${bulletCount}]`}
                </button>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>

            <div className="flex flex-col gap-6 max-md:gap-0">
                {projects.map((p, i) => (
                    <ProjectCard key={i} p={p} />
                ))}
            </div>
        </section>
    )
}
