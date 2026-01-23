import React from 'react'
import Menu from '../Components/Menu'
import Landing from '../Components/Landing'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Achievements from '../Components/Achievements'
import Skills from '../Components/Skills'
import Education from '../Components/Education'
import Contact from '../Components/Contact'

function Home() {
    return (
        <div>
            <Menu />
            <Landing />
             <About />
            {/* <Projects />
            <Achievements />
            <Skills />
            <Education />
            <Contact /> */}
        </div>
    )
}

export default Home