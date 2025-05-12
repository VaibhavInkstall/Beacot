import React from 'react'
import StudentFormImage from '../Assets/Students.jpg'
    
const StudentForm = () => {
  return (
    // Main big full screen
    <div className='w-full h-auto flex justify-center items-center text-sm'>
       
        {/* // Main  big div */}
        <div className='w-120 h-auto  pb-10 shadow-2xl rounded-2xl flex flex-col justify-center items-center mt-5 '>

           
                {/* // Form */}
                <form action="" className='w-full h-full flex flex-col justify-center items-center mt-5'>
                <h1 className='text-2xl font-bold mb-4 text-[#00B4D8]'>Student Form</h1>

                    <div>
                        <p>Student Full Name <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='Student Full Name' className='w-100 h-10 border-1 mt-1 px-1'/>
                    </div>

                    <div className='flex justify-around  items-center w-full mt-5 '>
                        <div>
                            <p>Contact Number <span className='text-red-500'>*</span></p>
                            <input type="text" placeholder='Contact Number' className='w-40 h-10 border-1 mt-1 px-1'/>
                        </div>
                        <div>
                            <p>Whatsapp Number</p>
                            <input type="text" placeholder='Whatsapp Number' className='w-40 h-10 border-1 mt-1 px-1'/>
                        </div>
                    </div>


                    <div className='mt-5'>
                        <p>School Name <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='School Name' className='w-100 h-10 border-1 mt-1 px-1'/>
                    </div>

                    
                    <div className='flex justify-around  items-center w-full mt-5 '>
                        <div>
                            <p>Standard<span className='text-red-500'>*</span></p>
                            <input type="text" placeholder='Standard' className='w-40 h-10 border-1 mt-1 px-1'/>
                        </div>
                        <div>
                            <p>Board<span className='text-red-500'>*</span></p>
                            <input type="text" placeholder='Board' className='w-40 h-10 border-1 mt-1 px-1'/>
                        </div>
                    </div>


                    <div className='mt-5'>
                        <p>Subjects you want to enroll with us<span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='We Teach all subjects' className='w-100 h-10 border-1 mt-1 px-1'/>
                    </div>

                    <div className='mt-5'>
                        <p>What are you looking for<span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='Student Full Name' className='w-100 h-10 border-1 mt-1 px-1'/>
                    </div>

                    <div className='flex justify-around  items-center w-full mt-5 '>
                        <div>
                            <p>Country Name<span className='text-red-500'>*</span></p>
                            <input type="text" placeholder='Country Name' className='w-40 h-10 border-1 mt-1 px-1'/>
                        </div>
                        <div>
                            <p>Country ISD Code<span className='text-red-500'>*</span></p>
                            <input type="text" placeholder='Board' className='w-40 h-10 border-1 mt-1 px-1'/>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <p>Full Address<span className='text-red-500'>*</span></p>
                        <textarea name="" id="" className="w-100 h-40 border-1 resize-none mt-1 px-1"></textarea>
                    </div>

                    <div className='mt-5'>
                        <p>Your PinCode<span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='Your PinCode' className='w-100 h-10 border-1 mt-1 px-1 '/>
                    </div>
                    
                    <button className='w-100 h-10 bg-[#00B4D8] mt-5 rounded-xl'>
                        Submit
                    </button>

                </form>

              

            </div>
        </div>
    
  )
}

export default StudentForm