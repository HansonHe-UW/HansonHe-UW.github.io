import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Extracurricular from './components/Extracurricular'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Nav />
            <div className="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Extracurricular />
                <Education />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
