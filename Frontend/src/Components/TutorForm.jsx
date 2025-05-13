import React, { useState } from 'react'
import { useEffect } from 'react';

const TutorSignup = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const [boards, setBoards] = useState([]);
  const [selectedBoards, setSelectedBoards] = useState([]);

  //For fetching languages
  useEffect(() => {
    const LanguageList = [
      "English",
      "Hindi",
      "Telugu",
      "Tamil",
      "Kannada",
      "Marathi",
      "German",
      "French",
      "Spanish",
      "Others"
    ];
    setLanguages(LanguageList);
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected && !selectedLanguages.includes(selected)) {
      setSelectedLanguages(prev => [...prev, selected]);
    }
  };


  //For Fetching boards
  useEffect(() => {
    // Manually defined list of boards based on authoritative sources
    const boardList = [
      "CBSE",
      "ICSE",
      "ISC",
      "IB",
      "IGCSE",
      "SSC",
      "HSC",
      "AP",
      "Others"
    ];
    setBoards(boardList);
  }, []);

  const handleBoardChange = (e) => {
    const selected = e.target.value;
    if (selected && !selectedBoards.includes(selected)) {
      setSelectedBoards(prev => [...prev, selected]);
    }
  };

  return (
    <>
      <div className='w-full  flex justify-center items-center '>

        <form action="" className='w-120 h-auto rounded-2xl shadow-2xl mt-5 flex  flex-col justify-center items-center pb-10 text-sm'>
          <h1 className='text-2xl font-bold mb-4 text-[#00B4D8]'>Tutor Form</h1>


          <div>
            <p>Teacher Full Name <span className='text-red-500'>*</span></p>
            <input type="text" placeholder='Teacher Full Name' className='w-100 h-10 border-1 mt-1 px-1' />
          </div>

          <div className='mt-5'>
            <p className='mb-1'>Email<span className='text-red-500'>*</span></p>
            <input type="text" placeholder='Email' className='w-100 h-10 border-1 mt-1 px-1' />
          </div>

          <div className='flex justify-around  items-center w-full mt-5 '>
            <div>
              <p>Phone Number<span className='text-red-500'>*</span></p>
              <input type="text" placeholder='Contact Number' className='w-40 h-10 border-1 mt-1 px-1' />
            </div>
            <div>
              <p>Whatsapp Number</p>
              <input type="text" placeholder='Whatsapp Number' className='w-40 h-10 border-1 mt-1 px-1' />
            </div>
          </div>

          <div className='flex justify-around  items-center w-full mt-5 '>
            <div>
              <p>Date of Birth<span className='text-red-500'>*</span></p>
              <input type="text" placeholder='Contact Number' className='w-40 h-10 border-1 mt-1 px-1' />
            </div>
            <div>
              <p>Gender<span className='text-red-500'>*</span></p>
              <select name="" id="" className='w-40 h-10 border-1 mt-1 px-1'>
                <option value="Male">Male</option>
                <option value="Female">Female </option>
              </select>
            </div>
          </div>

          <div className='mt-5'>
            <p>Address<span className='text-red-500'>*</span></p>
            <textarea name="" id="" placeholder="Describe More about yourself" className="w-100 h-20 border-1 resize-none mt-1 px-1"></textarea>
          </div>

          <div className='flex justify-around  items-center w-full mt-5 '>
            <div>
              <p>Longitude<span className='text-red-500'>*</span></p>
              <input type="text" placeholder='Contact Number' className='w-40 h-10 border-1 mt-1 px-1' />
            </div>

            <div>
              <p>Latitude</p>
              <input type="text" placeholder='Whatsapp Number' className='w-40 h-10 border-1 mt-1 px-1' />
            </div>
          </div>

          <div className='mt-5'>
            <p>Pincode<span className='text-red-500'>*</span></p>
            <input type="text" placeholder='Enter your Pincode here' className='w-100 h-10 border-1 mt-1 px-1' />
          </div>





          <div className='mt-5'>
            <p>Subjects<span className='text-red-500'>*</span></p>
            <select name="" id="" className='w-100 h-10 border-1 mt-1 px-1'>
              <option value="English">English</option>
              <option value="Maths">Maths </option>
              <option value="Social">Social </option>
              <option value="Hindi">Hindi </option>
              <option value="Science">Science </option>
              <option value="Other">Other </option>
            </select>
          </div>

          <div className='mt-5'>
            <p>Grades You Teach<span className='text-red-500'>*</span></p>
            <select name="" id="" className='w-100 h-10 border-1 mt-1 px-1'>
              <option value="1-2">1-2</option>
              <option value="3-4">3-4</option>
              <option value="5-6">5-6</option>
              <option value="7-8">7-8</option>
              <option value="9-10">9-10</option>
              <option value="11-12">11-12</option>

            </select>

          </div>

          <div className='mt-5'>
            <p>Experinece<span className='text-red-500'>*</span></p>
            <select name="" id="" className='w-100 h-10 border-1 mt-1 px-1'>
              <option value="1-2">1-2</option>
              <option value="3-4">3-4</option>
              <option value="5-6">5-6</option>
              <option value="7-8">7-8</option>
              <option value="9-10">9-10</option>
              <option value="11-12">11-12</option>

            </select>
          </div>



          <div className='mt-5'>
            <p>Mode of Teaching<span className='text-red-500'>*</span></p>
            <select name="" id="" className='w-100 h-10 border-1 mt-1 px-1'>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>

          <div className='mt-5'>
            <p>Please specify you have a stable laptop or not<span className='text-red-500'>*</span></p>
            <select name="" id="" className='w-100 h-10 border-1 mt-1 px-1'>
              <option value="Offline">Yes</option>
              <option value="Online">No</option>
            </select>
          </div>

          {/* FOR Languages */}
          <div className='mt-5 '>
            <p className=" mb-2">Languages you speak <span className='text-red-500'>*</span></p>
            <select onChange={handleChange} className="w-100 h-10 border-1 mt-1 px-1">
              <option value="">-- Select a language --</option>
              {languages.map((lang, index) => (
                <option key={index} value={lang}>{lang}</option>
              ))}
            </select>

            <div className="flex flex-wrap gap-2 mt-2 w-100">
              {selectedLanguages.map((lang, index) => (
                <div key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  {lang}
                </div>
              ))}
            </div>

          </div>


          {/* foR Borads */}
          <div className='mt-5'>
            <p className="">Boards you studied in</p>
            <select onChange={handleBoardChange} className="w-100 h-10 border-1 mt-1 px-1">
              <option value="">-- Select a board --</option>
              {boards.map((board, index) => (
                <option key={index} value={board}>{board}</option>
              ))}
            </select>

            <div className="flex flex-wrap gap-2 mt-2 w-100">
              {selectedBoards.map((board, index) => (
                <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {board}
                </div>
              ))}
            </div>

          </div>


          <div className='mt-5'>
            <p>Range of Age you are Comfortable to Teach<span className='text-red-500'>*</span></p>
            <select name="" id="" className='w-100 h-10 border-1 mt-1 px-1'>
              <option value="3-6">3-6</option>
              <option value="6-9">6-9</option>
              <option value="9-12">9-12</option>
              <option value="12-15">12-15</option>
              <option value="15-18">15-18</option>
              <option value="18-21">18-21</option>
              <option value="Offline">21-24</option>
              <option value="Online">25 and above</option>
            </select>
          </div>

          <div className='mt-5'>
            <p>Title<span className='text-red-500'>*</span></p>
            <textarea name="" id="" placeholder="Write Something creative about yourself" className="w-100 h-30 border-1 resize-none mt-1 px-1"></textarea>
          </div>

          <div className='mt-5'>
            <p>Description<span className='text-red-500'>*</span></p>
            <textarea name="" id="" placeholder="Please write atleast 500 words about yourself (your education qualification, your teaching experience, etc.)" className="w-100 h-40 border-1 resize-none mt-1 px-1"></textarea>
          </div>


          <div className='mt-5'>
            <p>Sample Video<span className='text-red-500'>*</span></p>
            <div name="" id="" className="w-100 h-40 border-1 border-gray-400 resize-none mt-1 px-1 rounded-lg"></div>
          </div>


          <div className='mt-5'>
            <p>Upload your Resume<span className='text-red-500'>*</span></p>
            <input type="file" className='w-100 h-7 rounded-xl mt-1 px-1 bg-gray-400     pt-1' />
          </div>

          <div className='mt-5'>
            <p>Upload your Certificates<span className='text-red-500'>*</span></p>
            <input type="file" className='w-100 h-7 rounded-xl mt-1 px-1 bg-gray-400   pt-1' />
          </div>

          <div className='mt-5'>
            <p>Upload your Horizontal Images (5 Images)<span className='text-red-500'>*</span></p>
            <p className='border-1 border-gray-400 rounded-lg p-3'> <span className="text-red-500">Note:</span> Yopr Profile will get rejected if you don't share clear Photo</p>
            <input type="file" multiple className='w-100 h-7 rounded-xl mt-1 px-1 bg-gray-400   pt-1' />
          </div>

          <div className='mt-5 w-105'>
            <div className='border-1 border-gray-400 rounded-lg p-3'>
              <p>Please upload your sample teaching video here:<span className='text-red-500'>*</span></p>
              <p>OR Please share your G-drive link
                If you are sharing your g-drive link please ensure to make it public. Use Zoom, Google Meet, MS teams or any other tool, to record your teaching video.</p>
            </div>

            <input type="file" multiple className='w-100 h-7 rounded-xl mt-1 px-1 bg-gray-400  pt-1' />
          </div>



          <div className=' w-100  mt-5'>
            <div>
              <input type="checkbox" />

              I agree to the Terms & Conditions of Beacot. Your request won't be processed if you have not attached your video. Please NOTE: Once you submit the video to us we will Publish it in our and our partner channels so as you can get more traction for your profile.


            </div>

          </div>
          <button className='w-100 h-10 bg-[#00B4D8] mt-5 rounded-xl'>
            Submit
          </button>

        </form>

      </div>
    </>
  )
}

export default TutorSignup