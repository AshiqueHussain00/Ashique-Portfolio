import React from 'react'
import Projects from './Projects'
import Certificate from './Certificate'
import HeroSection from './Herosection'
import AboutSummary from './AboutSummary'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutSummary/>
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
