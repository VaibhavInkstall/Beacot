import React, { useState, useEffect } from 'react'
import video from '../assets/Beach.mp4'
import Profile from '../assets/Profile.png'
import { BsWhatsapp } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import Navbar from './Navbar'

const ProfilePage = () => {

    const [closeDropdown, setCloseDropdown] = useState(false)
    const [closeDropdownTwo, setCloseDropdownTwo] = useState(false)
    const [closeDropdownThree, setCloseDropdownThree] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [bookDemoModel, setBookDemoModel] = useState(false)
    const [demoBooked, setDemoBooked] = useState(false)

    const handleDropdown = () => {
        setCloseDropdown(!closeDropdown)

    }

    const handleDropdownTwo = () => {
        setCloseDropdownTwo(!closeDropdownTwo)

    }

    const handleDropdownThree = () => {
        setCloseDropdownThree(!closeDropdownThree)

    }
    const handleShowMore = () => {
        setShowMore(!showMore)
    }
    const handleShowLess = () => {
        setShowMore(!showMore)
    }

    const handleopenbookdemomodel = () => {
        setBookDemoModel(true)
    }
    const handleCalendar = () => {
        setShowCalendar(!showCalendar)
    }

    const handlePrevWeek = () => {
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 7)))
    }

    const handleNextWeek = () => {
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 7)))
    }
    const handleDemoBooked = () => {
        setDemoBooked(true)
        setBookDemoModel(false)
    }

    const getWeekDays = () => {
        const days = []
        const firstDay = new Date(currentDate)
        const dayOfWeek = firstDay.getDay()
        const diff = firstDay.getDate() - dayOfWeek
        const sunday = new Date(firstDay.setDate(diff))

        for (let i = 0; i < 7; i++) {
            const day = new Date(sunday)
            day.setDate(sunday.getDate() + i)
            days.push({
                date: day,
                day: day.toLocaleDateString('en-US', { weekday: 'short' }),
                dateNum: day.getDate()
            })
        }
        return days
    }

    return (
        <>
                <Navbar />
            <div className='container mt-5  mx-auto w-[calc(100%-10%)] pb-10'>

                {/* Title    */}

                {/*Video and profile full div */}
                <div className=' h-auto flex overflow-y-hidden'>

                    {/* Video and Desc left div */}
                    <div className='overflow-y-hidden h-auto'>
                        <h1 className='text-2xl font-bold w-180 ml-10'>Here Will Be The Title which you will write in your Form so write carefully </h1>
                        {/* Video */}
                        <div className='w-170 rounded-2xl ml-10 h-90 mt-5 overflow-y-hidden'>
                            <video src={video} controls autoPlay muted ></video>
                        </div>
                        {/* Mode and Location */}
                        <div className='w-170 h-auto ml-10 mt-10 overflow-y-hidden flex gap-5'>
                            <p className='flex justify-center items-center border-1 px-4 py-1 rounded-full gap-3 font-semibold cursor-pointer'>
                                <MdOutlineLocationOn size={20} />
                                At Gunjan 's house : New Delhi
                            </p>
                            <p className='flex justify-center items-center border-1 px-4 py-1 rounded-full gap-3 font-semibold cursor-pointer'>
                                <IoVideocamOutline size={20} /> Online
                            </p>
                        </div>
                        {/* Description */}
                        <div className='w-170 h-auto ml-10 mt-10 overflow-y-hidden'>
                            <p>
                                An experienced math teacher with over a decade of classroom expertise, skilled in simplifying complex concepts and fostering a love for numbers. Known for engaging lessons, personalized support, and strong results. Adept at curriculum planning, exam preparation, and nurturing critical thinking in students across diverse learning levels and backgrounds.
                            </p>
                            {
                                !showMore ?
                                    <p onClick={handleShowMore} className='underline mt-5 cursor-pointer'>show more</p>
                                    :
                                    " "
                            }
                            {
                                showMore && (
                                    <div>
                                        <p className='mt-5'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, atque aperiam. Commodi fuga iste reprehenderit voluptatibus. Laboriosam dolor unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima vitae ipsam, necessitatibus cumque labore autem commodi ipsum cum ad. Incidunt maiores excepturi officiis necessitatibus aspernatur blanditiis aliquid veritatis sed?
                                        </p>
                                        <p onClick={handleShowLess} className='underline mt-5 cursor-pointer'>show less</p>
                                    </div>

                                )
                            }
                        </div>

                        <div className='ml-10'>


                            {/* For subjects */}
                            <div className='mt-10  overflow-y-hidden'>
                                <p className='text-2xl font-bold'>Subjects That I Teach</p>

                                <div className='mt-5  grid grid-cols-5 w-150 '>
                                    <p className=' bg-[#80ed99]  rounded-md w-15  text-center  '>Maths</p>
                                    <p className=' bg-[#80ed99]  rounded-md w-15  text-center  '>Science</p>
                                    <p className=' bg-[#80ed99]  rounded-md w-15  text-center  '>Social</p>
                                    <p className=' bg-[#80ed99]  rounded-md w-15  text-center  '>Hindi</p>
                                    <p className=' bg-[#80ed99]  rounded-md w-15  text-center  '>English</p>

                                </div>

                            </div>

                            {/* For Grades */}
                            <div className='mt-10  overflow-y-hidden'>
                                <p className='text-2xl font-bold'>Grades That I Teach   </p>

                                <div className='mt-5  gap-10 grid grid-cols-4  w-150 '>
                                    <p className=' bg-[#b0dfff]  rounded-md w-15  text-center  '>1-5</p>
                                </div>

                            </div>

                            {/* Launguages that  I speak */}
                            <div className='mt-10  overflow-y-hidden'>
                                <p className='text-2xl font-bold'>Launguages that  I speak</p>

                                <div className='mt-5  grid grid-cols-4  w-150 '>

                                    <p className=' bg-[#d0bfff]  rounded-md w-15  text-center  '>Marathi</p>
                                    <p className=' bg-[#d0bfff]  rounded-md w-15  text-center  '>Hindi</p>
                                    <p className=' bg-[#d0bfff]  rounded-md w-15  text-center  '>English</p>
                                    <p className=' bg-[#d0bfff]  rounded-md w-15  text-center  '>Gujrati</p>

                                </div>

                            </div>


                            {/* Speciality model opening */}
                            <div className='mt-10  overflow-hidden'>
                                <p className='text-2xl font-bold'>I Specialized With</p>


                                {/* Speciality One */}
                                <div className='mt-5 w-180 border-b-1 h-auto flex justify-between items-center pl-2 pb-2'>
                                    <div>
                                        <div className='flex w-180 justify-between items-center '>
                                            <p className='font-semibold' >Conversational English</p>
                                            {
                                                !closeDropdown ?
                                                    <RiArrowDropDownLine size={30} onClick={handleDropdown} className='cursor-pointer' /> :
                                                    <RiArrowDropUpLine size={30} onClick={handleDropdown} className='cursor-pointer' />


                                            }
                                        </div>
                                        {
                                            closeDropdown && (
                                                <div className=''>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aliquam.</p>

                                                </div>
                                            )
                                        }
                                    </div>


                                </div>

                                {/* Speciality Two */}
                                <div className='mt-5 w-180 border-b-1 h-auto flex justify-between items-center pl-2 pb-2'>
                                    <div>
                                        <div className='flex w-180 justify-between items-center '>
                                            <p className='font-semibold' >Bussiness English</p>
                                            {
                                                !closeDropdownTwo ?
                                                    <RiArrowDropDownLine size={30} onClick={handleDropdownTwo} className='cursor-pointer' /> :
                                                    <RiArrowDropUpLine size={30} onClick={handleDropdownTwo} className='cursor-pointer' />


                                            }
                                        </div>
                                        {
                                            closeDropdownTwo && (
                                                <div className=''>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aliquam.</p>

                                                </div>
                                            )
                                        }
                                    </div>


                                </div>

                                {/* Speciality Three */}
                                <div className='mt-5 w-180 border-b-1 h-auto flex justify-between items-center pl-2 pb-2'>
                                    <div>
                                        <div className='flex w-180 justify-between items-center '>
                                            <p className='font-semibold' >Learn To Speak English</p>
                                            {
                                                !closeDropdownThree ?
                                                    <RiArrowDropDownLine size={30} onClick={handleDropdownThree} className='cursor-pointer' /> :
                                                    <RiArrowDropUpLine size={30} onClick={handleDropdownThree} className='cursor-pointer' />


                                            }
                                        </div>
                                        {
                                            closeDropdownThree && (
                                                <div className=''>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aliquam.</p>

                                                </div>
                                            )
                                        }
                                    </div>


                                </div>


                            </div>

                            {/* Reviews */}
                            <div className='mt-10'>

                                <div className='w-180 flex justify-between items-center'>
                                    <h1 className='text-2xl font-bold flex justify-center items-center'>Reviews <IoMdInformationCircleOutline className="ml-2" size={25} /></h1>
                                    <div className='flex items-center gap-2 text-sm font-semibold '>
                                        <FaStar className='text-yellow-500' />
                                        <p>5 (172 Reviews)</p>
                                    </div>
                                </div>

                                {/* Reviews to read  */}
                                <div className='w-180 h-auto pb-10 border-1 border-gray-500 rounded-4xl overflow-y-hidden mt-5 '>
                                    {/* Profile */}
                                    <div className='w-170 flex justify-between items-center mt-5 ml-5'>
                                        <div className='flex items-center'>
                                            {/* Image */}
                                            <div className='w-10 h-10 rounded-full bg-black'>

                                            </div>
                                            <p className='text-lg ml-2'>Vaibhav</p>
                                        </div>
                                        {/* Rating */}
                                        <div>
                                            <p className='flex items-center'> <FaStar className='text-yellow-500 mr-2' /> 5</p>

                                        </div>


                                    </div>

                                    {/* Review Text */}
                                    <div className=' flex justify-center items-center overflow-hidden'>
                                        <p className='w-165 mt-5'>
                                            Perfect! I’m taking online guitar lessons with Gunjan, and I’m really happy with them! Gunjan is a great teacher. He explains things clearly and makes learning fun. The lessons are easy to follow, and he always encourages me to do my best. My guitar skills have improved a lot since I started, and I look forward to every lesson. I highly recommend gunjan if you want to learn guitar!
                                        </p>
                                    </div>

                                </div>

                            </div>



                            {/* Add other divs above */}
                        </div>


                    </div>

                    {/* Profile Right div */}
                    <div className='w-100 h-145 shadow-2xl  rounded-2xl shadow-full ml-10 mt-5 fixed right-10 '>

                        {/* Image */}
                        <div className='w-full h-50 flex flex-col justify-center items-center mt-5'>
                            <div className=' w-50 h-50 flex justify-center items-center overflow-y-hidden rounded-full'>
                                <img src={Profile} className='w-50 h-50 ' alt="Teacher image" />
                            </div>
                        </div>

                        {/* Information about tutor */}
                        <div className='w-full text-center'>
                            <p className='font-bold mt-1 text-xl'>Vaibhav</p>
                        </div>
                        <div className="flex justify-around items-center text-sm text-gray-500 mt-5 font-semibold">
                            <p>1000Rs/Hr</p>
                            <p>20000Rs/Monthly</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center gap-y-2 mt-5'>

                            <button className='w-80 py-2 border-2 border-[#ac25c2] rounded-xl cursor-pointer flex justify-center items-center gap-3 bg-[#ac25c2]  border-[#ac25c2] text-white hover:text-black duration-300 ease-in-out'>
                                <IoIosStarOutline size={20} /> Book Demo Session
                            </button>

                            <button className='w-80 py-2 border-2 rounded-xl cursor-pointer flex justify-center items-center gap-3 bg-[#80ed99] border-[#80ed99]'>
                                <BsWhatsapp size={20} /> WhatsApp Me
                            </button>

                            <button onClick={() => setShowCalendar(true)} size={20} className='w-80 py-2 border-2 rounded-xl cursor-pointer flex justify-center items-center gap-3 bg-white border-gray-2'>
                                <FaRegCalendar /> Calendar
                            </button>

                            {/* Calendar */}
                            {
                                showCalendar && (
                                    <div className='w-full h-screen flex justify-center items-center inset-0 fixed bg-black/50'>
                                        <div className='w-[1200px] h-[600px] overflow-y-auto bg-white border-1 rounded-lg p-6'>
                                            <div className='flex justify-between items-center mb-6'>
                                                <div className='flex items-center gap-2'>
                                                    <button
                                                        onClick={handlePrevWeek}
                                                        className='text-gray-500 hover:text-gray-700 transition-colors cursor-pointer'
                                                    >
                                                        <span className='text-xl'>←</span>
                                                    </button>
                                                    <h3 className='text-xl font-medium'>
                                                        {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                                    </h3>
                                                    <button
                                                        onClick={handleNextWeek}
                                                        className='text-gray-500 hover:text-gray-700 transition-colors ml-2 cursor-pointer'
                                                    >
                                                        <span className='text-xl'>→</span>
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={handleCalendar}
                                                    className='text-gray-500 text-gray-700 transition-colors text-2xl hover:text-red-500 cursor-pointer'
                                                >
                                                    ×
                                                </button>
                                            </div>

                                            <div className='grid grid-cols-[150px_1fr] gap-6'>
                                                {/* Time slots */}
                                                <div className='border-r border-gray-200 pr-4'>
                                                    <div className='h-[75px] mb-4'></div> {/* Empty space to align with day headers */}
                                                    <div className='space-y-3 '>
                                                        {Array.from({ length: 17 }, (_, i) => {
                                                            const hour = 7 + i;
                                                            const hour2 = 8 + i
                                                            const time = `${hour % 12 || 12}:${hour >= 12 ? 'PM' : 'AM'}`;
                                                            const time2 = `${hour2 % 12 || 12}:${hour >= 12 ? 'PM' : 'AM'}`;
                                                            return (
                                                                <div key={i} className='h-12 flex items-center '>
                                                                    <button
                                                                        className='w-full py-2 border border-gray-200 text-center  transition-colors rounded-md text-sm font-medium bg-[#00B4D8] text-white'
                                                                    >
                                                                        {time}   to   {time2}
                                                                    </button>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Weekly Calendar */}
                                                <div className='flex-1'>
                                                    <div className='grid grid-cols-7 gap-3 mb-4 '>
                                                        {getWeekDays().map((day, index) => (
                                                            <div
                                                                key={index}
                                                                className='border border-gray-200 rounded-lg p-3 bg-gray-100 transition-colors hover:bg-[#d0bfff] cursor-pointer'
                                                            >
                                                                <div className='text-center font-medium text-gray-600'>
                                                                    {day.day}
                                                                </div>
                                                                <div className='text-center text-lg font-medium'>
                                                                    {day.dateNum}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div>
                                                        {Array.from({ length: 17 }, (_, i) => (
                                                            <div key={i} className='grid grid-cols-7 gap-3 mb-3'>
                                                                {getWeekDays().map((day, dayIndex) => (
                                                                   
                                                                    <div
                                                                        onClick={handleopenbookdemomodel}
                                                                        key={`${i}-${dayIndex}`}
                                                                        className={`h-12 border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer rounded-md ${demoBooked ? 'bg-[#80ed99]' : ''}`}
                                                                    >
                                                                        {/* Time slot block */}
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        ))}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                              {
                                bookDemoModel && (
                                    <div className="w-full h-screen  flex items-center justify-center fixed inset-0">
                                        <div className="bg-white  w-100 h-50 p-6 rounded-lg shadow-lg flex justify-center items-center">
                                            <button onClick={handleDemoBooked} className="text-lg font-semibold mb-4 cursor-pointer bg-[#d0bfff]  p-2">Book a Demo</button>
                                        </div>
                                    </div>
                                )
                            }



                        </div>
                        <div className=' w-full text-center text-sm mt-10 font-semibold text-gray-400'>
                            1 - 5 Years of Teaching Experience
                        </div>

                    </div>





                </div>




            </div>
        </>
    )
}

export default ProfilePage