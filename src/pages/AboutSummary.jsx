// src/Home.jsx
import Ashique from '../assets/p image/Ashique.jpg';
import { FaGlobe, FaEnvelope, FaPhoneAlt, FaBriefcase } from "react-icons/fa";

const AboutSummary = () => {
    return (
        <section className="w-full py-12 ">
               <h1 className="mb-4 text-4xl font-bold tracking-wide text-center" data-aos="fade-up" data-aos-duration="600">ABOUT</h1>
            <div className="flex flex-col items-center w-10/12 mx-auto lg:flex-row lg:gap-10">
         
                {/* Image */}
                <div className="w-full mb-6 lg:w-4/12 lg:mb-0" data-aos="fade-left" data-aos-duration="600">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*IRFhWNqusUWbTsB1hQXhrQ.gif"
                        alt="Profile"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>
                
                {/* About Content */}
                <div className="w-full lg:w-9/12" data-aos="fade-right" data-aos-duration="600">
                    <h2 className="mb-4 text-3xl font-semibold">Full-Stack Developer</h2>
                    <p className="mb-6 text-lg">
                        Diploma in Computer Science with expertise in modern web development technologies. Skilled in creating responsive, scalable applications and eager to collaborate on innovative projects.
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaGlobe className="text-gray-600" />
                            <p><span className="font-bold">Website:</span> www.example.com</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaEnvelope className="text-gray-600" />
                            <p><span className="font-bold">Email:</span> ansariazad7864@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaPhoneAlt className="text-gray-600" />
                            <p><span className="font-bold">Phone:</span> +91-9547694261</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaBriefcase className="text-gray-600" />
                            <p><span className="font-bold">Freelance:</span> Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
