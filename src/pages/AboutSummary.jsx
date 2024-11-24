import { FaGlobe, FaEnvelope, FaPhoneAlt, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSummary = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="w-full py-12 -z-10">
            <motion.h1
                className="mb-4 text-4xl font-bold tracking-wide text-center"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
            >
                ABOUT
            </motion.h1>
            <div className="flex flex-col items-center w-10/12 mx-auto lg:flex-row lg:gap-10">
                {/* Image */}
                <motion.div
                    className="w-full mb-6 lg:w-4/12 lg:mb-0"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*IRFhWNqusUWbTsB1hQXhrQ.gif"
                        alt="Profile"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </motion.div>

                {/* About Content */}
                <motion.div
                    className="w-full lg:w-9/12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInRight}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-6 text-lg text-center lg:text-justify">
                        Diploma in Computer Science with expertise in modern web development technologies. Skilled in creating responsive, scalable applications and eager to collaborate on innovative projects.
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-wrap gap-6">
                        {[{
                            icon: <FaGlobe className="text-gray-600" />,
                            label: "Website",
                            value: "www.example.com"
                        },
                        {
                            icon: <FaEnvelope className="text-gray-600" />,
                            label: "Email",
                            value: "ansariazad7864@gmail.com"
                        },
                        {
                            icon: <FaPhoneAlt className="text-gray-600" />,
                            label: "Phone",
                            value: "+91-9547694261"
                        },
                        {
                            icon: <FaBriefcase className="text-gray-600" />,
                            label: "Freelance",
                            value: "Available"
                        }].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3"
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                {item.icon}
                                <p>
                                    <span className="font-bold">{item.label}:</span> {item.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSummary;
