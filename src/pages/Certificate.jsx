// src/CertificatePage.jsx
import React from 'react';
import CertificateCard from '../component/common/CertificateCard';
import { Certificate } from '../data/Certificate';
import { motion } from 'framer-motion';

const CertificatePage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },  // Initial state (hidden)
    visible: { opacity: 1, y: 0 },  // Final state (visible)
};

  return (
    <section className='relative w-full'>
      <div className='w-10/12 mx-auto'>
        <h1 className="mb-6 text-3xl font-extrabold text-center">My Certificates</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Certificate.map((credential, index) => (
               <motion.div
               key={index}
               variants={cardVariants}
               initial="hidden"
               whileInView="visible"
               transition={{
                   duration: 0.6, // Adjust duration if needed
                   delay: index * 0.2, // Stagger animation for each card
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
  );
};

export default CertificatePage;
