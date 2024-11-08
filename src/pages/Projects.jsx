import React from 'react';
import Card from '../component/common/Card';
import { cardData } from '../data/Projects-data';
import { motion } from 'framer-motion';

function Projects() {
    // Animation variants for Framer Motion
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
        visible: { opacity: 1, y: 0 },  // Final state (visible)
    };

    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {cardData.map((data, index) => (
                <motion.div
                    key={data.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        duration: 0.6, // Adjust duration if needed
                        delay: index * 0.2, // Stagger animation for each card
                    }}
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card is in view
                >
                    <Card
                        title={data.title}
                        description={data.description}
                        technologies={data.technologies}
                        image={data.image}
                        link1={data.link}
                        link2={data.link2}
                        buttonText1={data.buttonText1}
                        buttonText2={data.buttonText2}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default Projects;
