import React from "react";
import Home from "./components/Home/Home";
import Courses from "./components/courses/Courses";
import {Routes,Route, Navigate} from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


const App = () => {
  const[authuser,setAuthUser]=useAuth()
  console.log(authuser);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authuser?<Courses/>:<Navigate to='/'/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
