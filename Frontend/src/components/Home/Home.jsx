import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Bookcard  from '../Bookcard'
import Footer from '../Footer'
import { useRef } from 'react'

const Home = () => {
  const targetRef = useRef(null);
  return (
    <div>
      <Navbar />
      <Banner scrollToTarget={() => targetRef.current.scrollIntoView({ behavior: "smooth" })}/>
      <Bookcard refProp={targetRef}/>
      <Footer />
    </div>
  )
}

export default Home
