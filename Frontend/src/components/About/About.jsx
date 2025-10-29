import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-20 text-center'>
      <h1 className="text-2xl font-bold md:text-4xl">
          About <span className="text-pink-500">Us</span>
        </h1>
        <p className="mt-10 text-gray-300">
            Welcome to BookStore, your one-stop destination for discovering a wide range of books across genres. From thrilling mysteries to inspiring self-help guides, we bring stories that educate, entertain, and inspire. Our mission is to make quality books accessible to everyone and help readers embark on journeys of imagination and knowledge.
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white rounded px-4 py-2 mt-10 hover:bg-pink-400 hover:scale-110 transition-transform duration-300">
            Back
          </button>
        </Link>
</div>
    </div>
  )
}

export default About
