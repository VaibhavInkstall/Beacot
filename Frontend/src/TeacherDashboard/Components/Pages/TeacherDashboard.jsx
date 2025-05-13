import React from 'react'
import SideNav from '../Pages/SideNav.jsx'
import TeacherNav from '../Pages/TeacherNav.jsx'

const TeacherDashboard = () => {
  return (
    <>
    <div className='w-full h-screen flex'>
    <SideNav/>
    <TeacherNav/>

    </div>
    </>
  )
}

export default TeacherDashboard