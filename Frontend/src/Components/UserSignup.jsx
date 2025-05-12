import React from 'react'
import { FaGoogle } from "react-icons/fa";

const UserSignup = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-100 h-100 shadow-2xl rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold mb-4 text-[#00B4D8]'>Sign Up</h1>
         <div className='flex w-80 items-center justify-around border-1  py-2'>
            <span><FaGoogle size={20} /></span>
            <p>Signup with Google</p>
         </div>

         <div className='flex items-center mt-10' >
            <p>Already a member ?</p>
            <span className='text-[#00B4D8] font-semibold'>Log in</span>
         </div>
        </div>
        </div> 
    </>
  )
}

export default UserSignup