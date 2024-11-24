// import React from 'react'
import Projects from './Projects'
import Certificate from './Certificate'
import HeroSection from './HeroSection'
import AboutSummary from './AboutSummary'
import Skills from './Skills'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutSummary/>     
        <Skills/>
        <div>
        <Projects limit={4} />
        </div>
        <div>
        <Certificate limit={4} />
        </div>
    </div>
  )
}

export default Home
