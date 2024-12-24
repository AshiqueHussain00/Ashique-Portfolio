import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-white-100 bg-gradient-to-r from-gray-800 via-gray-900 to-black-900">
      <div className="container flex flex-col items-center mx-auto space-y-6">
        {/* Top Section */}
        {/* Name Section */}
        <h2 className="text-3xl font-bold text-blue-400">Ashique Hussain Ansari</h2>
        <p className="text-sm text-center text-gray-400">
          Web Developer | Freelancer | Creative Enthusiast
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/ashiquebiniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/ashiquebiniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com/ashiquebiniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="mailto:ashique@example.com"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
       
      </div>
       {/* Bottom Section */}
       <div className="pt-4 mt-8 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ashique Hussain Ansari. All Rights
            Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
