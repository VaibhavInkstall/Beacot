import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Title from "../assets/Title.svg";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Searcher from "./HomeContent.jsx";

export default function Navbar() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCompactSearch, setShowCompactSearch] = useState(false);
    const [showFullSearch, setShowFullSearch] = useState(true);
    const scrolledRef = useRef(false);
    const navigate = useNavigate(); // ✅ Hook for navigation

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                if (!scrolledRef.current) {
                    scrolledRef.current = true;
                    setIsScrolled(true);
                    setShowFullSearch(false);
                    setShowCompactSearch(true);
                }
            } else {
                if (scrolledRef.current) {
                    scrolledRef.current = false;
                    setIsScrolled(false);
                    setShowCompactSearch(false);
                    setShowFullSearch(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCompactSearchClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className={`sticky top-0 z-50 bg-white shadow ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-">
                            <img
                                src={logo}
                                alt="Beacot"
                                className="h-10 cursor-pointer"
                                onClick={() => navigate("/")} // ✅ Navigates to homepage
                            />
                            <img src={Title} alt="Beacot Title" className="h-17" />
                        </div>

                        {/* Compact Search Bar */}
                        {showCompactSearch && (
                            <div
                                onClick={handleCompactSearchClick}
                                className="flex items-center justify-between mx-auto w-full max-w-md rounded-full border border-gray-300 bg-white shadow-sm px-3 py-2 cursor-pointer hover:shadow-md transition"
                            >
                                <div className="flex items-center divide-x divide-gray-300 flex-grow">
                                    <div className="px-4 text-sm font-semibold text-black">
                                        Anywhere
                                    </div>
                                    <div className="px-4 text-sm font-semibold text-black">
                                        AnyBoard
                                    </div>
                                    <div className="px-4 text-sm text-gray-500">
                                        Subject
                                    </div>
                                </div>
                                <div className="bg-[#B911C1] text-white p-2 rounded-full ml-2">
                                    <FaSearch size={14} />
                                </div>
                            </div>
                        )}

                        {/* User Options */}
                        <div className="flex items-center space-x-2 text-sm">
                            <span className={`hover:bg-gray-100 px-3 py-2 rounded-full cursor-pointer transition duration-200 ${isScrolled ? 'hidden md:inline-block' : ''}`}>
                                Apply as tutor
                            </span>
                            <span className={`hover:bg-gray-100 px-3 py-2 rounded-full cursor-pointer transition duration-200 ${isScrolled ? 'hidden md:inline-block' : ''}`}>
                                🌐
                            </span>
                            <div className="flex items-center border rounded-full px-2 py-1 space-x-2 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                                <span>☰</span>
                                <span className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-gray-400 transition-colors duration-200">
                                    👤
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Full Search Bar */}
                    {showFullSearch && (
                        <div className="bg-white rounded-full shadow-sm px-2 py-1 flex items-center justify-between space-x-2 max-w-4xl mx-auto mt-2 border border-gray-300">
                            {/* Where */}
                            <div className="text-sm flex flex-col px-3 py-1 hover:bg-gray-100 transition duration-200 rounded-full">
                                <label className="font-semibold text-xs text-gray-800">Where</label>
                                <input
                                    type="text"
                                    placeholder="Search by location"
                                    className="outline-none text-gray-600 placeholder-gray-500 text-sm bg-transparent"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                            </div>

                            <div className="w-px h-8 bg-gray-300" />

                            {/* Board */}
                            <div className="text-sm flex flex-col px-3 py-1 hover:bg-gray-100 transition duration-200 rounded-full">
                                <label className="font-semibold text-xs text-gray-800">Board</label>
                                <input
                                    type="text"
                                    placeholder="Search boards"
                                    className="outline-none text-gray-600 placeholder-gray-500 text-sm bg-transparent"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                            </div>

                            <div className="w-px h-8 bg-gray-300" />

                            {/* Subject */}
                            <div className="text-sm flex flex-col px-3 py-1 hover:bg-gray-100 transition duration-200 rounded-full">
                                <label className="font-semibold text-xs text-gray-800">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Search subjects"
                                    className="outline-none text-gray-600 placeholder-gray-500 text-sm bg-transparent"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                            </div>

                            <div className="w-px h-8 bg-gray-300" />

                            {/* Grade */}
                            <div className="text-sm flex flex-col px-3 py-1 hover:bg-gray-100 transition duration-200 rounded-full">
                                <label className="font-semibold text-xs text-gray-800">Grade</label>
                                <input
                                    type="text"
                                    placeholder="Search by grade"
                                    className="outline-none text-gray-600 placeholder-gray-500 text-sm bg-transparent"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                            </div>

                            {/* Search Button */}
                            <button
                                className={`bg-[#B911C1] text-white p-2 rounded-full transition-transform duration-300 ease-in-out ${isSearchFocused ? 'scale-105' : 'scale-100'}`}
                            >
                                <FaSearch size={14} />
                            </button>
                        </div>
                        
                    )}
                </div>
            </div>
        </>
    );
}
