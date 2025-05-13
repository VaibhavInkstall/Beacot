import React from 'react'
import SideNav from '../Pages/SideNav.jsx'
import TeacherNav from '../Pages/TeacherNav.jsx'
import { useAuth } from '../../Context/AuthProvider'
import Classes from '../Pages/Classes.jsx'
import Profile from '../Pages/Profile.jsx'
import Wallet from '../Pages/Wallet.jsx'
import Calendar from '../Pages/Calendar.jsx'
import Messages from '../Pages/Messages.jsx'
import Students from '../Pages/Students.jsx'
import Dashboard from '../Pages/Dashboard.jsx'


const TeacherDashboard = () => {
  const { isSidenavOpen, setIsSidenavOpen } = useAuth();
  const { isDashboardClicked, setIsDashboardClicked } = useAuth();
  const { isProfileClicked, setIsProfileClicked } = useAuth();
  const { isWalletClicked, setIsWalletClicked } = useAuth();
  const { isClassesClicked, setIsClassesClicked } = useAuth();
  const { isCalendarClicked, setIsCalendarClicked } = useAuth();
  const { isMessagesClicked, setIsMessagesClicked } = useAuth();
  const { isStudentsClicked, setIsStudentsClicked } = useAuth();
  return (
    <>
      <div className='w-full h-screen flex'>

        <SideNav />

        <div className='w-full h-screen'>

          <TeacherNav />
          {
            isClassesClicked ? <Classes /> :
            isDashboardClicked ? <Dashboard /> : 
            isProfileClicked ? <Profile /> : 
            isWalletClicked ? <Wallet /> : 
            isCalendarClicked ? <Calendar /> : 
            isMessagesClicked ? <Messages /> : 
            isStudentsClicked ? <Students /> : ""
          }

        </div>

      </div>
    </>
  )
}

export default TeacherDashboard