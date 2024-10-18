import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaGithub } from 'react-icons/fa';

const Card = ({ title, description, image, link1, link2, buttonText1, buttonText2, technologies }) => {
    return (
        <div className="max-w-sm overflow-hidden transition-all duration-300 transform bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
            <Link to={link1}>
                <div className='transition duration-300 hover:scale-105'>
                    <img className="object-cover w-full h-48" src={image} alt={title} />
                </div>
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white-100">
                    {title}
                </h5>
                <p className="mb-4 text-gray-700 dark:text-gray-400">{description}</p>
                
                {/* Technologies Section */}
                <div className="mb-4">
                    <ul className="flex flex-wrap mt-1 space-x-2">
                        {technologies && technologies.map((tech, index) => (
                            <li key={index} className="px-3 py-1 text-xs text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-4">
                    {/* Read More Button */}
                    <Link
                        to={link1}
                        className="inline-flex items-center px-6 py-2 text-sm font-medium transition-transform duration-300 transform rounded-lg shadow-lg text-white-100 bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        {buttonText1}
                        <FaEye className="ml-2" />
                    </Link>

                    {/* GitHub Link Button */}
                    <Link
                        to={link2}
                        className="inline-flex items-center px-6 py-2 text-sm font-medium transition-transform duration-300 transform rounded-lg shadow-lg text-white-100 bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                    >
                        {buttonText2}
                        <FaGithub className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
