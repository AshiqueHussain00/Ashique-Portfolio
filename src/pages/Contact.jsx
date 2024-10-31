import React from 'react';
import image from '../assets/p image/image.png';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        toast.success('Message sent successfully!');
        reset();
    };

    return (
        <div className="font-[sans-serif] max-w-6xl mx-auto relative shadow-[0_4px_20px_rgba(29,78,216,0.6)] rounded-3xl overflow-hidden mt-4">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="absolute w-20 h-20 bg-blue-400 rounded-full -bottom-6 -left-6"></div>
            <div className="absolute w-20 h-20 bg-blue-400 rounded-full -top-6 -right-6"></div>

            <div className="grid gap-8 px-6 py-8 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center text-center">
                    <img src={image} className="w-5/6 shrink-0 scale-x-[-1]" alt="Contact" />
                    <div className="flex mt-6 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="rounded-tl-3xl rounded-bl-3xl">
                    <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">Contact us</h2>
                    <div className="relative max-w-md mx-auto space-y-3">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white-100">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-600 text-black-900 focus-within:bg-transparent"
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}

                        <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white-100">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
                            className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md text-black-900 outline-blue-600 focus-within:bg-transparent"
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}

                        <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white-100">Phone</label>
                        <input
                            type="text"
                            placeholder="Phone No."
                            {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9]+$/, message: "Invalid phone number" } })}
                            className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md text-black-900 outline-blue-600 focus-within:bg-transparent"
                        />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}

                        <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white-100">Message</label>
                        <textarea
                            placeholder="Message"
                            rows="6"
                            {...register("message", { required: "Message is required" })}
                            className="w-full px-4 pt-3 text-sm bg-gray-100 rounded-md outline-blue-600 text-black-900 focus-within:bg-transparent"
                        />
                        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}

                        <button
                            type="submit"
                            className="text-white-100 w-full bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="inline mr-2" viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
