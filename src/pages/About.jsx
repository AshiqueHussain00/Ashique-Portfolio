import { motion } from "framer-motion";
import Ashique from '../assets/p image/Ashique.jpg';
import { FaBirthdayCake, FaGlobe, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaUserGraduate, FaBriefcase } from "react-icons/fa";

const About = () => {
    // Define animation variants for reuse
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
            className="py-16 px-6 bg-white w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
        >
            {/* Title and Description */}
            <motion.div
                className="text-center mb-12"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold mb-4 tracking-wide">ABOUT</h1>
                <p className="text-gray-600 text-lg max-w-7xl mx-auto">
                    Diploma student in Computer Science and Technology with a
                    strong foundation in programming and software development.
                    Demonstrated ability to conceptualize, design, and implement
                    software solutions. Keen problem solver with a passion for staying
                    abreast of emerging technologies.
                </p>
            </motion.div>

            {/* Main content: Image and Details */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full px-8">
                {/* Left side (Image) */}
                <motion.div
                    className="flex-shrink-0 w-full lg:w-3/12"
                    variants={fadeInLeft}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={Ashique}
                        alt="Profile"
                        className="w-full h-full max-w-md object-cover rounded-lg shadow-xl mx-auto"
                    />
                </motion.div>

                {/* Right side (Text Content) */}
                <motion.div
                    className="w-full lg:w-8/12 text-left"
                    variants={fadeInRight}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6">Web Developer</h2>
                    <p className="text-gray-500 mb-8">
                        Experienced in creating responsive websites with a passion for modern web technologies and design.
                    </p>

                    {/* Info Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3">
                            <FaBirthdayCake className="text-gray-500" />
                            <p><span className="font-bold">Birthday:</span> 25 July 2003</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaUserGraduate className="text-gray-500" />
                            <p><span className="font-bold">Age:</span> 21</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaGlobe className="text-gray-500" />
                            <p><span className="font-bold">Website:</span> www.example.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaBriefcase className="text-gray-500" />
                            <p><span className="font-bold">Degree:</span> Diploma in Computer Science</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-gray-500" />
                            <p><span className="font-bold">Phone:</span> +91-9547694261</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-gray-500" />
                            <p><span className="font-bold">Email:</span> ansariazad7864@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-gray-500" />
                            <p><span className="font-bold">City:</span> Asansol, West Bengal, India</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaBriefcase className="text-gray-500" />
                            <p><span className="font-bold">Freelance:</span> Available</p>
                        </div>
                    </motion.div>

                    {/* Description at the bottom */}
                    <motion.p
                        className="mt-8 text-gray-500"
                        variants={fadeInUp}
                        transition={{ duration: 1 }}
                    >
                        Passionate about collaborating on web development projects. Always eager to take on new challenges and expand my skill set.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
