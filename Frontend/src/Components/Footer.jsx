import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#00BDE3] text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                {/* Logo */}
                <div>
                    <h1 className="text-3xl font-semibold text-[white]">beacot</h1>
                </div>

                {/* About Us */}
                <div>
                    <h2 className="font-bold mb-3">About Us</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Who we are</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">How it works</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Work at Preply</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Contact Us</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">FAQs</a></li>
                    </ul>
                </div>

                {/* For Students */}
                <div>
                    <h2 className="font-bold mb-3">For Students</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">All Subjects</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Find Tutors</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Online Classes</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Beacot Scholarships</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Refer a Friend</a></li>
                    </ul>
                </div>

                {/* For Teachers */}
                <div>
                    <h2 className="font-bold mb-3">For Teachers</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Join Beacot as a Tutor</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Teacher Programs</a></li>
                        <li><a href="#" className="text-white/90 hover:text-white hover:pl-1 transition-all duration-300">Join as an Online Tutor</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h2 className="font-bold mb-3">Socials</h2>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="flex items-center text-white/90 hover:text-white hover:pl-1 transition-all duration-300">
                                <span className="w-6 h-6 flex items-center justify-center mr-2">
                                    <FaInstagram size={20} />
                                </span>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white/90 hover:text-white hover:pl-1 transition-all duration-300">
                                <span className="w-6 h-6 flex items-center justify-center mr-2">
                                    <FaYoutube size={20} />
                                </span>
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white/90 hover:text-white hover:pl-1 transition-all duration-300">
                                <span className="w-6 h-6 flex items-center justify-center mr-2">
                                    <FaFacebook size={20} />
                                </span>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white/90 hover:text-white hover:pl-1 transition-all duration-300">
                                <span className="w-6 h-6 flex items-center justify-center mr-2">
                                    <FaTwitter size={20} />
                                </span>
                                X
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white/90 hover:text-white hover:pl-1 transition-all duration-300">
                                <span className="w-6 h-6 flex items-center justify-center mr-2">
                                    <FaLinkedinIn size={20} />
                                </span>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-white/10">
                <p className="text-white/80 hover:text-white transition-colors duration-300"> 2025 Beacot</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">Privacy Policy</a>
                    <a href="#" className="text-white/80 hover:text-white hover:underline transition-all duration-300">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
}
