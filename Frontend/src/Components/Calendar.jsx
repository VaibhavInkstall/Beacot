import React, { useState, useEffect } from 'react'

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [days, setDays] = useState([])

  useEffect(() => {
    updateDays()
  }, [currentWeek])

  const updateDays = () => {
    const startOfWeek = new Date(currentWeek)
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
    
    const weekDays = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      weekDays.push({
        date: day,
        day: day.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: day.getDate(),
        month: day.toLocaleDateString('en-US', { month: 'short' })
      })
    }
    setDays(weekDays)
  }

  const prevWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)))
  }

  const nextWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)))
  }

  const getTimeSlots = () => {
    const timeSlots = []
    for (let i = 8; i <= 21; i++) { // 8 AM to 9 PM
      timeSlots.push(i)
    }
    return timeSlots
  }

  return (
    <div className='w-full h-screen flex justify-center items-center inset-0 fixed bg-black/50'>
      <div className='w-300 h-150 bg-white border-1 fixed overflow-y-auto'>
        {/* Header with week navigation */}
        <div className='w-full h-12 bg-[#d0bfff] flex items-center justify-between px-4'>
          <button 
            onClick={prevWeek}
            className='text-xl font-bold text-white'
          >
            ❮
          </button>
          <p className='text-lg font-semibold'>
            {days[0].date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          <button 
            onClick={nextWeek}
            className='text-xl font-bold text-white'
          >
            ❯
          </button>
        </div>

        {/* Calendar Grid */}
        <div className='grid grid-cols-8 gap-1 p-2'>
          {/* Time Column */}
          <div className='col-span-1 border-r-1 border-gray-200'>
            {getTimeSlots().map((hour) => (
              <div 
                key={hour}
                className='h-10 border-b-1 border-gray-200 text-right pr-2'
              >
                {hour}:00
              </div>
            ))}
          </div>

          {/* Days of the Week */}
          {days.map((day, index) => (
            <div key={index} className='col-span-1'>
              <div className='h-10 bg-gray-100 text-center font-semibold border-b-1 border-gray-200'>
                {day.day} {day.dateNum}
              </div>
              {getTimeSlots().map((hour) => (
                <div 
                  key={hour}
                  className='h-10 border-b-1 border-gray-200 hover:bg-gray-50'
                >
                  {/* This is where you can add events or schedule items */}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Close Button */}
        <div className='absolute top-4 right-4'>
          <button 
            onClick={() => window.close()}
            className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calendar