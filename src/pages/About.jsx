import Ashique from '../assets/p image/Ashique.jpg';
import { FaBirthdayCake, FaGlobe, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaUserGraduate, FaBriefcase } from "react-icons/fa";

const About = () => {
    return (
        <section className="w-full px-6 py-16 bg-white">
            {/* Title and Description */}
            <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="600">
                <h1 className="mb-4 text-4xl font-bold tracking-wide">ABOUT</h1>
                <p className="mx-auto text-lg text-gray-600 max-w-7xl">
                    Diploma student in Computer Science and Technology with a
                    strong foundation in programming and software development.
                    Demonstrated ability to conceptualize, design, and implement
                    software solutions. Keen problem solver with a passion for staying
                    abreast of emerging technologies.
                </p>
            </div>

            {/* Main content: Image and Details */}
            <div className="flex flex-col items-center justify-between w-full gap-10 px-8 lg:flex-row">
                {/* Left side (Image) */}
                <div className="flex-shrink-0 w-full lg:w-3/12" data-aos="fade-left" data-aos-duration="600">
                    <img
                        src={Ashique}
                        alt="Profile"
                        className="object-cover w-full h-full max-w-md mx-auto rounded-lg shadow-xl"
                    />
                </div>

                {/* Right side (Text Content) */}
                <div className="w-full text-left lg:w-8/12" data-aos="fade-right" data-aos-duration="600">
                    <h2 className="mb-6 text-3xl font-semibold">Web Developer</h2>
                    <p className="mb-8 text-gray-500">
                        Experienced in creating responsive websites with a passion for modern web technologies and design.
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaBirthdayCake className="text-gray-500" />
                            <p><span className="font-bold">Birthday:</span> 25 July 2003</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaUserGraduate className="text-gray-500" />
                            <p><span className="font-bold">Age:</span> 21</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaGlobe className="text-gray-500" />
                            <p><span className="font-bold">Website:</span> www.example.com</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaBriefcase className="text-gray-500" />
                            <p><span className="font-bold">Degree:</span> Diploma in Computer Science</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaPhoneAlt className="text-gray-500" />
                            <p><span className="font-bold">Phone:</span> +91-9547694261</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaEnvelope className="text-gray-500" />
                            <p><span className="font-bold">Email:</span> ansariazad7864@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaMapMarkerAlt className="text-gray-500" />
                            <p><span className="font-bold">City:</span> Asansol, West Bengal, India</p>
                        </div>
                        <div className="flex items-center gap-3" data-aos="fade-up" data-aos-duration="800">
                            <FaBriefcase className="text-gray-500" />
                            <p><span className="font-bold">Freelance:</span> Available</p>
                        </div>
                    </div>

                    {/* Description at the bottom */}
                    <p className="mt-8 text-gray-500" data-aos="fade-up" data-aos-duration="1000">
                        Passionate about collaborating on web development projects. Always eager to take on new challenges and expand my skill set.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
