import React from 'react'
import Projects from './Projects'
import Certificate from './Certificate'

function Home() {
  return (
    <div>
        
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
