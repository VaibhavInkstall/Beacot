import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const TeacherNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className='container w-full  h-15 border-b-1 border-gray-200 flex justify-between items-center'>
        {/* left */}
        <div className=' w-150 h-10 ml-10 flex '>
          <IoMdSearch size={25} className='text-gray-400 relative left-10 top-2' />
          <input type="text" placeholder='Search Classes , Students' className='py-2 w-150 pl-10 bg-gray-100 rounded-lg outline-none border-1 border-gray-300' />
        </div>

        {/* right */}
        <div className=' w-65 h-10 ml-10 flex justify-center gap-2 items-center'>
          <GoBell size={25} className='' />
           <p className='w-8 h-8 bg-black rounded-full'></p>

           <div className='flex gap-2 items-center'>
           <p className='text-sm'>Vaibhav Pednekar</p>
           <RiArrowDropDownLine  onClick={() => setShowDropdown(!showDropdown)} size={25} className='cursor-pointer' />
           </div>
           {
            showDropdown && (
              <div className='absolute top-12 right-5 w-50 bg-white border-1 border-gray-200 shadow-lg rounded-lg'>
                <ul className='p-2 text-gray-700'>
                  <div className='flex items-center'>
                  <span><HiOutlineUser size={20} /></span><li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Profile</li>
                  </div>
                 
                  <div className='flex items-center'>
                  <span><IoSettingsOutline size={20} /></span><li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Settings</li>
                  </div>

                  <div className='flex items-center'>
                  <span><IoLogOutOutline size={20} /></span><li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>Logout</li>
                  </div>
                </ul>
              </div>
            )
           }

        </div>

      </div>
    </>
  )
}

export default TeacherNav