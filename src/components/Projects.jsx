import { motion } from 'framer-motion'

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
        date: 'February 2026',
        image: '/projects/spatialvcs-icon.png',
        award: '🏆 Best Beginner Hack — CTRL+HACK+DEL 2.0',
        links: [
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

            <div className="projects-list">
                {projects.map((p, i) => (
                    <motion.div
                        className="project-card"
                        key={i}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <div className="project-body">
                            <div className="project-header">
                                <div className="project-header-main">
                                    {p.image && (
                                        <img src={p.image} alt={`${p.title} thumbnail`} className="project-thumb" />
                                    )}
                                    <div className="project-header-text">
                                        <div className="project-title-row">
                                            <div className="project-title">{p.title}</div>
                                            {p.links && p.links.length > 0 && (
                                                <div className="project-links">
                                                    {p.links.map((link, k) => (
                                                        <a
                                                            key={k}
                                                            href={link.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="project-link-icon"
                                                            title={link.label}
                                                        >
                                                            {link.icon}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="project-subtitle">{p.subtitle}</div>
                                    </div>
                                </div>
                                <span className="project-date">{p.date}</span>
                            </div>

                            {p.award && <div className="project-award">{p.award}</div>}

                            <ul className="project-highlights">
                                {p.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>

                            <div className="project-tech">
                                {p.tech.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
