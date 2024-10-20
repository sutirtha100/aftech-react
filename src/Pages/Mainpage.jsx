import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Service from '../Components/Service'
import ChooseUs from '../Components/ChooseUs'
import WeWork from '../Components/WeWork'
import Testimonial from '../Components/Testimonial'
import Connect from '../Components/Connect'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'

function Mainpage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Service/>
    <ChooseUs/>
    <WeWork/>
    <Testimonial/>
    <Connect/>
    <Footer/>
    </>
  )
}

export default Mainpage