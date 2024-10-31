// src/CertificatePage.jsx
import React from 'react';
import { Certificate } from '../data/Certificate';

const CertificatePage = () => {
  return (
    <div className="p-5">
    <h1 className="mb-5 text-2xl font-bold">My Certificate</h1>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Certificate.map((credential, index) => (
        <div
          key={index}
          className="p-4 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
        >
          <img
            src={`path/to/logos/${credential.logo}.png`} // Adjust this path
            alt={`${credential.logo} logo`}
            className="w-20 h-20 mb-2"
          />
          <h3 className="font-semibold">{credential.title}</h3>
          <p className="text-gray-600">{credential.issuer}</p>
          <p className="text-sm text-gray-500">Issued: {credential.issueDate}</p>
          <p className="text-sm text-gray-500">
            Skills: {credential.skills.length > 0 ? credential.skills.join(', ') : 'No skills listed'}
          </p>
          <img
            src={credential.demoImage} // Use the demo image from the data
            alt={`${credential.title} demo`}
            className="mt-2 rounded"
          />
          <a
            href={credential.documentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 mt-3 text-white bg-blue-500 rounded"
          >
            View Document
          </a>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CertificatePage;
