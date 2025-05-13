import React, { useState } from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineUsers } from 'react-icons/hi';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useAuth } from "../../Context/AuthProvider";


const SideNav = () => {
    
    const {isSidenavOpen, setIsSidenavOpen} = useAuth();
    const {isDashboardClicked, setIsDashboardClicked} = useAuth();
    const {isProfileClicked, setIsProfileClicked} = useAuth();
    const {isWalletClicked, setIsWalletClicked} = useAuth();
    const {isClassesClicked, setIsClassesClicked} = useAuth();
    const {isCalendarClicked, setIsCalendarClicked} = useAuth();
    const {isMessagesClicked, setIsMessagesClicked} = useAuth();
    const {isStudentsClicked, setIsStudentsClicked} = useAuth();

    

    const handlesidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    }

    const handleclick = () => {
        setIsDashboardClicked(!isDashboardClicked);
        setIsProfileClicked(false);
        setIsWalletClicked(false);
        setIsClassesClicked(false);
        setIsCalendarClicked(false);
        setIsMessagesClicked(false);
        setIsStudentsClicked(false);
    }
    const handleProfileClick = () => {
        setIsProfileClicked(!isProfileClicked);
        setIsDashboardClicked(false);
        setIsWalletClicked(false);
        setIsClassesClicked(false);
        setIsCalendarClicked(false);
        setIsMessagesClicked(false);
        setIsStudentsClicked(false);
    }
    const handleWalletClick = () => {
        setIsWalletClicked(!isWalletClicked);
        setIsDashboardClicked(false);
        setIsProfileClicked(false);
        setIsClassesClicked(false);
        setIsCalendarClicked(false);
        setIsMessagesClicked(false);
        setIsStudentsClicked(false);
    }
    const handleClassesClick = () => {
        setIsClassesClicked(!isClassesClicked);
        setIsDashboardClicked(false);
        setIsProfileClicked(false);
        setIsWalletClicked(false);
        setIsCalendarClicked(false);
        setIsMessagesClicked(false);
        setIsStudentsClicked(false);
    }
    const handleCalendarClick = () => {
        setIsCalendarClicked(!isCalendarClicked);
        setIsDashboardClicked(false);
        setIsProfileClicked(false);
        setIsWalletClicked(false);
        setIsClassesClicked(false);
        setIsMessagesClicked(false);
        setIsStudentsClicked(false);
    }
    const handleMessagesClick = () => {
        setIsMessagesClicked(!isMessagesClicked);
        setIsDashboardClicked(false);
        setIsProfileClicked(false);
        setIsWalletClicked(false);
        setIsClassesClicked(false);
        setIsCalendarClicked(false);
        setIsStudentsClicked(false);
    }
    const handleStudentsClick = () => {
        setIsStudentsClicked(!isStudentsClicked);
        setIsDashboardClicked(false);
        setIsProfileClicked(false);
        setIsWalletClicked(false);
        setIsClassesClicked(false);
        setIsCalendarClicked(false);
        setIsMessagesClicked(false);
    }
    return (
        <>
            <div className={`w-15 h-screen border-1 border-gray-200 ${isSidenavOpen ? 'w-50 duration-500' : 'w-15 duration-500 flex flex-col justify-center items-center'}`}>
                <div className='h-14.5  w-full border-b-1 border-gray-200  flex justify-center items-center'>
                <AiOutlineThunderbolt size={30} className='text-blue-500' />

                    {
                        isSidenavOpen ? (
                            <p className='duration-500 text-lg ml-5 mr-5 '>Beacot</p>
                        ) : ""
                    }
                    {
                        isSidenavOpen ? (
                            <FaAngleDoubleLeft onClick={handlesidenav} className='cursor-pointer' />
                        ) : (
                            <FaAngleDoubleRight onClick={handlesidenav} className='cursor-pointer' />
                        )
                    }
                    
                </div>

                <div className={ `h-auto  ${isSidenavOpen ? 'pb-40 ' : 'pb-30'} flex flex-col space-y-5 justify-center items-center mt-4`}>

                    <div onClick={handleclick} className={` flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isDashboardClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <MdOutlineWidgets size={25} className={`cursor-pointer text-gray-600 w-7 h-7 p-0.5 rounded-md ${isDashboardClicked ? 'rounded-md' : ''} `} />
                        {
                            isSidenavOpen ? (
                                <p  className='duration-500 text-gray-600'>Dashboard</p>
                            ) : ""
                        }
                    </div>

                    <div onClick={handleProfileClick} className={` flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isProfileClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <CgProfile size={25} className='cursor-pointer text-gray-600' />
                        {
                            isSidenavOpen ? (
                                <p className='duration-500 text-gray-600'>Profile</p>
                            ) : ""
                        }
                    </div>

                    <div onClick={handleWalletClick} className={`  flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isWalletClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <MdOutlineAccountBalanceWallet size={25} className='cursor-pointer text-gray-600' />
                        {
                            isSidenavOpen ? (
                                <p className='duration-500 text-gray-600'>Earnings</p>
                            ) : ""
                        }
                    </div>

                    <div onClick={handleClassesClick} className={` flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isClassesClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <LuGraduationCap size={25} className='cursor-pointer text-gray-600' />
                        {
                            isSidenavOpen ? (
                                <p className='duration-500 text-gray-600'>Classes</p>
                            ) : ""
                        }
                    </div>

                    <div onClick={handleCalendarClick} className={` flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isCalendarClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <IoCalendarClearOutline size={25} className='cursor-pointer text-gray-600' />
                        {
                            isSidenavOpen ? (
                                <p className='duration-500 text-gray-600'>Calendar</p>
                            ) : ""
                        }
                    </div>

                    <div onClick={handleMessagesClick} className={` flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isMessagesClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <FiMessageSquare size={25} className='cursor-pointer text-gray-500' />
                        {
                            isSidenavOpen ? (
                                <p className='duration-500 text-gray-600'>Messages</p>
                            ) : ""
                        }
                    </div>

                    <div onClick={handleStudentsClick} className={` flex  gap-3 ${isSidenavOpen ? 'w-42 cursor-pointer duration-500 flex justify-start items-center  mr-5 p-1' : 'w-10 h-10 duration-500 flex flex-col justify-center items-center'} ${isStudentsClicked ? 'bg-blue-300 rounded-md' : ''}`}>
                        <HiOutlineUsers size={25} className='cursor-pointer text-gray-600' />
                        {
                            isSidenavOpen ? (
                                <p className='duration-500 text-gray-600'>Students</p>
                            ) : ""
                        }
                    </div>
                </div>

                <div className={`w-40 flex  gap-3 ${isSidenavOpen ? 'w-50 duration-500 ml-1' : 'w-15 duration-500 flex flex-col justify-center items-center'}`}>
                    <p className='w-10 h-10 bg-black rounded-full mb-1'></p>
                    {
                        isSidenavOpen ? (
                            <div>
                                <p className='duration-500  text-sm'>Vaibhav Pednekar</p>
                                <p className='duration-500 text-gray-600 text-sm'>Mathematics</p>
                            </div>

                        ) : ""
                    }
                </div>
            </div>

        </>
    )
}

export default SideNav