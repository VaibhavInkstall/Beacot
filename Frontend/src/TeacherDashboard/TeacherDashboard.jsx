import React from 'react'
import SideNav from './SideNav'
import TeacherNav from './TeacherNav'

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