import React from 'react'
import CertificateCard from '../component/common/CertificateCard'
import { Certificate } from '../data/Certificate'
import { motion } from 'framer-motion'

const CertificatePage = ({ limit }) => {
  // Default limit is 3
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
    visible: { opacity: 1, y: 0 } // Final state (visible)
  }

  // Heading animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state for the heading
    visible: { opacity: 1, y: 0 } // Final state for the heading
  }

  // Slice the Certificate array to display only the first 'limit' certificates
  const limitedCertificates = Certificate.slice(0, limit)

  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto mt-10 mb-10'>
        {/* Applying Framer Motion to the heading */}
        <motion.h1
          className='mb-10 text-3xl font-bold text-center '
          variants={headingVariants}
          initial='hidden'
          whileInView='visible'
          transition={{
            duration: 0.6, // Adjust duration as needed
            delay: 0.1 // Delay before starting the animation
          }}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the heading is in view
        >
          <div className='flex-col justify-center'>
            <div className='underline'>My Certificates</div>
            {/* <div className=''>____________________</div> */}
          </div>
        </motion.h1>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {limitedCertificates.map((credential, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              transition={{
                duration: 0.4, // Adjust duration if needed
                delay: index * 0.1 // Stagger animation for each card
              }}
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card is in view
            >
              <CertificateCard
                key={credential.id}
                logo={credential.logo}
                title={credential.title}
                issuer={credential.issuer}
                issueDate={credential.issueDate}
                skills={credential.skills}
                documentLink={credential.documentLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatePage
