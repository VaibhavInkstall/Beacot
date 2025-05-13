import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './Components/ProfilePage.jsx'
import UserSignup from './Components/UserSignup'
import StudentForm from './Components/StudentForm'
import UserLogin from './Components/UserLogin'
import TutorSignup from './Components/TutorForm'
import HomePage from './Components/HomePage.jsx'
import Layout from './style/layout'
import TeacherDashboard from '../src/TeacherDashboard/Components/Pages/TeacherDashboard.jsx'

const App = () => {
  return (
    <>

     <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/TutorSignup" element={<TutorSignup />} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
       

      </Routes>
     </Layout>

     
      
     
    </BrowserRouter>
  
    </>
  )

}

export default App