import React from 'react'
import Navbar from './Navbar'
import HomeContent from './HomeContent'
import Footer from './Footer'
import Searcher from './HomeContent'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Searcher />
    <HomeContent/>
    <Footer/>
    </>
  )
}

export default HomePage