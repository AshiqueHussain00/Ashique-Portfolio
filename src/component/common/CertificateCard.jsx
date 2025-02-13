import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const CertificateCard = ({ logo, title, issuer, issueDate, skills, documentLink }) => {
  return (
    <div className="p-1 transition-all duration-300 transform rounded-lg shadow-lg hover:scale-105 dark:bg-gray-800 dark:border-gray-900">
      <img
        src={logo}
        alt={`${title} logo`}
        className="object-cover w-full mb-3 rounded-lg h-60 text-white-100"
      />
      <h3 className="text-lg font-semibold text-center uppercase text-white-100">{title}</h3>
      <p className="mt-1 text-center text-white-100">{issuer}</p>
      <p className="mt-2 text-sm text-center text-white-100">Issued: {issueDate}</p>
      <p className="mt-2 text-sm text-center text-white-100">
        Skills: {skills.length > 0 ? skills.join(', ') : 'No skills listed'}
      </p>
      <div className="flex justify-center mt-4 mb-4">
        <a
          href={documentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 text-sm font-medium transition-transform duration-300 transform rounded-lg shadow-lg text-white-100 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View Document
          <FaEye className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
