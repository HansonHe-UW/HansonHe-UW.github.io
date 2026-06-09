const stack = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JetBrains Mono']

export default function Footer() {
    return (
        <footer className="py-12 border-t border-line text-center">
            <div className="flex flex-wrap justify-center items-baseline gap-y-2 gap-x-[0.85rem] mb-6 font-mono text-[0.72rem] tracking-[-0.01em]">
                <span className="text-fg-faint tracking-[0.08em] uppercase text-[0.66rem]">BUILT_WITH</span>
                <span className="flex flex-wrap justify-center gap-y-[0.3rem] gap-x-[0.55rem]">
                    {stack.map((t) => (
                        <span key={t} className="tag-bracket text-fg-soft">{t}</span>
                    ))}
                </span>
            </div>
            <div className="flex justify-center gap-[0.6rem] mb-[0.85rem] font-mono text-[0.68rem] text-fg-faint tracking-[0.06em] uppercase">
                <span>BUILD/{import.meta.env.VITE_BUILD_DATE}</span>
                <span className="text-accent opacity-70">·</span>
                <span>WATERLOO_ON</span>
            </div>
            <p className="text-[0.8rem] text-fg-faint">© 2026 Shengyuan (Hanson) He</p>
        </footer>
    )
}
