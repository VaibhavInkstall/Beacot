import { useRef, useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaFilter,
    FaLanguage,
    FaMicrophone,
    FaCalculator,
    FaBusinessTime,
    FaHeart,
    FaStar
} from "react-icons/fa";
import { MdTranslate, MdScience, MdHistoryEdu, MdComputer, MdPsychology } from "react-icons/md";
import { GiDna2, GiChemicalDrop } from "react-icons/gi";
import { TbLanguageHiragana } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import img from "../assets/Teacher.jpg";
import { useNavigate } from 'react-router-dom';



const subjects = [
    { label: "English", icon: <MdTranslate size={24} /> },
    { label: "Physics", icon: <MdScience size={24} /> },
    { label: "Hindi", icon: <TbLanguageHiragana size={24} /> },
    { label: "French", icon: <FaLanguage size={24} /> },
    { label: "Biology", icon: <GiDna2 size={24} /> },
    { label: "Singing", icon: <FaMicrophone size={24} /> },
    { label: "Chemistry", icon: <GiChemicalDrop size={24} /> },
    { label: "Math", icon: <FaCalculator size={24} /> },
    { label: "Accounting", icon: <FaCalculator size={24} /> },
    { label: "Business", icon: <FaBusinessTime size={24} /> },
    { label: "Economics", icon: <SiGoogleanalytics size={24} /> },
    { label: "History", icon: <MdHistoryEdu size={24} /> },
    { label: "Computer", icon: <MdComputer size={24} /> },
    { label: "Psychology", icon: <MdPsychology size={24} /> },
    { label: "Statistics", icon: <FaCalculator size={24} /> },
];



export default function SubjectScrollBar() {
    const scrollRef = useRef(null);
    const [favorites, setFavorites] = useState(new Set());

    const scroll = (offset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += offset;
        }
    };

    const toggleFavorite = (teacherName) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(teacherName)) {
            newFavorites.delete(teacherName);
        } else {
            newFavorites.add(teacherName);
        }
        setFavorites(newFavorites);
    };

    const navigate = useNavigate();
    const handleProfilePage = () => {
         navigate('/ProfilePage');
     };
    
    return (
        <div className="bg-white min-h-screen">
            <div className="relative flex items-center px-6 py-4">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll(-200)}
                    className="z-10 p-2 bg-white rounded-full border shadow-sm hover:bg-gray-100 text-[#00BDE3]"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft size={16} />
                </button>

                {/* Scrollable Subject List */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar mx-4 w-full"
                    style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {subjects.map((subject, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 min-w-[64px] text-xs text-gray-700 hover:text-[#80ed99] cursor-pointer flex-shrink-0"
                        >
                            <div className="p-3 mb-2 rounded-full bg-gray-100 text-[#00BDE3] transition-transform transform hover:scale-110 hover:bg-[#80ed99]">
                                {subject.icon}
                            </div>
                            <span className="text-center whitespace-nowrap">{subject.label}</span>
                        </div>
                    ))}
                </div>

                {/* Right Arrow + Filters */}
                <div className="flex items-center gap-2 z-10">
                    <button
                        onClick={() => scroll(200)}
                        className="p-2 bg-white rounded-full border shadow-sm hover:bg-gray-100 text-[#00BDE3]"
                        aria-label="Scroll right"
                    >
                        <FaChevronRight size={16} />
                    </button>

                    <button className="flex items-center justify-center h-12 px-6 border border-gray-300 rounded-xl text-sm bg-white text-black hover:shadow-md">
                        <FaFilter className="mr-2" />
                        Filters
                    </button>
                </div>
            </div>

            {/* Teacher Cards Section */}
            <div onClick={handleProfilePage} className="flex justify-center">
                <div className="w-full max-w-7xl ml-[84px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Manisha', subject: 'English', rating: 4.9, reviews: 25, price: 2000 },
                            { name: 'Rahul', subject: 'Mathematics', rating: 4.8, reviews: 18, price: 1800 },
                            { name: 'Priya', subject: 'Physics', rating: 4.7, reviews: 22, price: 2200 },
                            { name: 'Amit', subject: 'Chemistry', rating: 4.9, reviews: 30, price: 2100 },
                            { name: 'Neha', subject: 'Biology', rating: 4.8, reviews: 25, price: 1900 },
                            { name: 'Vikram', subject: 'Computer Science', rating: 4.9, reviews: 28, price: 2300 },
                            { name: 'Anjali', subject: 'Economics', rating: 4.7, reviews: 20, price: 2000 },
                            { name: 'Raj', subject: 'History', rating: 4.8, reviews: 15, price: 1800 },
                            { name: 'Sonia', subject: 'Geography', rating: 4.9, reviews: 24, price: 2100 },
                            { name: 'Sony', subject: 'Accounting', rating: 4.9, reviews: 24, price: 2100 },
                            { name: 'Sonali', subject: 'Hindi', rating: 4.9, reviews: 24, price: 2100 },
                            { name: 'Sonu', subject: 'History', rating: 4.9, reviews: 24, price: 2100 },
                            { name: 'Kavita', subject: 'Psychology', rating: 4.8, reviews: 19, price: 2000 },
                            { name: 'Deepak', subject: 'French', rating: 4.6, reviews: 16, price: 1900 },
                            { name: 'Ritika', subject: 'Statistics', rating: 4.7, reviews: 21, price: 2000 },
                        ].map((teacher, index) => (
                            <div key={index} className="group w-full rounded-3xl overflow-hidden bg-white relative">
                                {/* Profile Image with Overlays */}


                                <div className="relative overflow-hidden rounded-3xl">
                                    <img
                                        src={img}
                                        alt={teacher.name}
                                        className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Name and Location Overlay */}
                                    <div className="absolute bottom-2 left-2 ">
                                        <div className="text-white text-[24px] font-bold px-3 py-1 rounded-full">
                                            {teacher.name}
                                        </div>
                                        <div className=" text-white text-[17px] font-medium px-3 py-1 rounded-full">
                                            Bengaluru (online)
                                        </div>
                                    </div>

                                    {/* Favorite Heart Icon */}
                                    <button
                                        onClick={() => toggleFavorite(teacher.name)}
                                        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md transition-colors duration-200 hover:bg-gray-100"
                                    >
                                        <FaHeart size={16} color={favorites.has(teacher.name) ? "#FF1053" : "#a0aec0"} />
                                    </button>
                                </div>

                                {/* Card Content */}
                                <div className="p-4">
                                    {/* Rating and Badge */}
                                    <div className="flex items-center mt-2 space-x-2">
                                        <div className="flex items-center text-yellow-500 text-sm font-semibold">
                                            <FaStar className="mr-1" />
                                            {teacher.rating}
                                            <span className="text-gray-500 ml-1">({teacher.reviews} reviews)</span>
                                        </div>
                                        {index % 3 === 0 && (
                                            <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                                                Top Rated
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm mt-2 truncate">
                                        <span className="font-bold">{teacher.subject} - </span>
                                        Expert in {teacher.subject.toLowerCase()} with {teacher.reviews}+ successful sessions.
                                    </p>

                                    {/* Pricing and Offer */}
                                    <div className="flex items-center space-x-2 text-sm mt-2">
                                        <span className="font-bold text-black">₹{teacher.price.toLocaleString()}/hr</span>
                                        <span className="text-red-500 font-medium">• 1st free class</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        
        </div>
    );
}
