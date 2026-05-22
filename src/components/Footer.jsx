export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-stamp">
                <span>BUILD/{import.meta.env.VITE_BUILD_DATE}</span>
                <span className="footer-stamp-dot">·</span>
                <span>WATERLOO_ON</span>
            </div>
            <div className="footer-links">
                <a href="mailto:s296he@uwaterloo.ca">Email</a>
                <a href="https://www.linkedin.com/in/shengyuan-he" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/HansonHe-UW" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <p className="footer-text">© 2026 Shengyuan (Hanson) He</p>
        </footer>
    )
}
