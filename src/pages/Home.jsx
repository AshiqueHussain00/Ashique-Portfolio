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
       
        <Projects limit={4} />
        
        <Certificate limit={4} />
       
    </div>
  )
}

export default Home
