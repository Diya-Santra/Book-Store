import React from 'react'
import Navbar from '../Navbar'
import Course from '../Course'
import Footer from '../Footer'
import list from '../../../public/list.json'

const Courses = () => {
    console.log(list);
    
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
