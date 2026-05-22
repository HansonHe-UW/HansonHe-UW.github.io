const stack = ['React', 'Vite', 'Framer Motion', 'JetBrains Mono']

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-stack">
                <span className="footer-stack-label">BUILT_WITH</span>
                <span className="footer-stack-items">
                    {stack.map((t) => (
                        <span key={t} className="footer-stack-tag">{t}</span>
                    ))}
                </span>
            </div>
            <div className="footer-stamp">
                <span>BUILD/{import.meta.env.VITE_BUILD_DATE}</span>
                <span className="footer-stamp-dot">·</span>
                <span>WATERLOO_ON</span>
            </div>
            <p className="footer-text">© 2026 Shengyuan (Hanson) He</p>
        </footer>
    )
}
