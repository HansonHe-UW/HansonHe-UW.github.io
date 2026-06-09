import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Extracurricular from './components/Extracurricular'
import Education from './components/Education'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Nav />
            <div className="max-w-[860px] mx-auto px-8 max-md:px-5 overflow-x-hidden [counter-reset:section]">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Extracurricular />
                <Awards />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
