import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import {Contact} from './Components/contact';
import course from './Components/course';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {Registration} from './Components/registration';
import {Loginpage} from './Components/Loginpage';
import About from './Components/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FreeCourse from "./Components/Free-course-section/FreeCourse";
import Testimonials from "./Components/Testimonial/Testimonials";

import home from "./Components/Hero-Section/home";
const App = () => {
  return(
    <div>
    <ToastContainer />
    <Navbar />
    <br></br>
    <Routes>
    {/* <Route path='/' Component={Home}/> */}
      <Route path='/About' Component={About}/>
      <Route path='/' Component={home}/>
      <Route path='/course' Component={course}/>
      <Route path='/FreeCourse' Component={FreeCourse}/>
      <Route path='/ContactUS' Component={ContactUs}/>
      {/* <Route path='/Contact' Component={Contact}/> */}
      <Route path='/Testimonials' Component={Testimonials}/>
      {/* <Route path='/SignIn' Component={SignIn}/> */}
      {/* <Route path='/SignUp' Component={SignUp}/> */}
      <Route path='/registration' Component={Registration}/>
      <Route path='/Loginpage' Component={Loginpage}/>
      
    </Routes>
    <br></br>
    {/* <FreeCourse /> */}
   
    <Footer />
    </div>
  );
}

export default App;
