// src/About.jsx
import Ashique from '../assets/p image/Ashique.jpg';
import { FaBirthdayCake, FaGlobe, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaUserGraduate, FaBriefcase } from "react-icons/fa";

const About = () => {
    return (
        <section className="relative w-full py-10 ">
            <div className="w-11/12 mx-auto">
                {/* Title and Description */}
                <header className="mb-5 text-center" data-aos="fade-up" data-aos-duration="600">
                    <h1 className="mb-4 text-4xl font-bold ">ABOUT ME</h1>
                    <p className="max-w-6xl mx-auto text-lg ">
                        I'm a passionate diploma student in Computer Science and Technology with a solid foundation in software development.
                        I am always eager to tackle new challenges and stay updated with emerging technologies.
                    </p>
                </header>

                {/* Main content: Image and Details */}
                <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
                    {/* Left side (Image) */}
                    <div className="flex-shrink-0 w-full lg:w-3/12" data-aos="fade-left" data-aos-duration="600">
                        <img
                            src={Ashique}
                            alt="Profile"
                            className="w-full h-[60vh] object-cover rounded-tl-[5rem] rounded-br-[5rem] border-8 border-solid border-transparent bg-gradient-to-br  shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
                        />
                    </div>
                    {/* Right side (Text Content) */}
                    <div className="w-full lg:w-8/12" data-aos="fade-right" data-aos-duration="600">
                        <h2 className="mb-6 text-3xl font-semibold ">Web Developer</h2>
                        <p className="mb-8 text-lg ">
                            I specialize in developing responsive and modern websites. With a deep passion for web technologies,
                            I focus on delivering seamless user experiences with a strong understanding of front-end and back-end development.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                            {[
                                { icon: <FaBirthdayCake className="text-gray-500" />, label: "Birthday", value: "25 July 2003" },
                                { icon: <FaUserGraduate className="text-gray-500" />, label: "Age", value: "21" },
                                { icon: <FaGlobe className="text-gray-500" />, label: "Website", value: "www.example.com" },
                                { icon: <FaBriefcase className="text-gray-500" />, label: "Degree", value: "Diploma in Computer Science" },
                                { icon: <FaPhoneAlt className="text-gray-500" />, label: "Phone", value: "+91-9547694261" },
                                { icon: <FaEnvelope className="text-gray-500" />, label: "Email", value: "ansariazad7864@gmail.com" },
                                { icon: <FaMapMarkerAlt className="text-gray-500" />, label: "City", value: "Asansol, West Bengal, India" },
                                { icon: <FaBriefcase className="text-gray-500" />, label: "Freelance", value: "Available" }
                            ].map((info, index) => (
                                <div key={index} className="flex items-center gap-4 " data-aos="fade-up" data-aos-duration="800">
                                    {info.icon}
                                    <p><span className="font-semibold">{info.label}:</span> {info.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description at the bottom */}
                        <p className="mt-8 text-lg " data-aos="fade-up" data-aos-duration="1000">
                            I am passionate about collaborating on exciting web development projects. I enjoy learning new skills and technologies,
                            and I'm always looking for opportunities to work on innovative projects that challenge my abilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
