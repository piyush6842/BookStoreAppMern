import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className=" min-h-screen">
      <About />
    </div>
    <Footer />
  </>
  )
}

export default AboutUs;
