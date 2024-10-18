import React from 'react'
import Card from './common/card'
import { cardData } from '../data/Projects-data'

function Projects() {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {cardData.map((data) => (
                <Card
                    key={data.id} // Use id as key
                    title={data.title}
                    description={data.description}
                    technologies={data.technologies}
                    image={data.image}
                    link1={data.link}
                    link2={data.link2}
                    buttonText1={data.buttonText1}
                    buttonText2={data.buttonText2}
                />
            ))}
        </div>
    )
}

export default Projects
