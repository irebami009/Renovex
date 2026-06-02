import React from 'react'
import Home from '../Componenet/Home'
import Service from '../Componenet/Service'
import AboutUs from '../Componenet/AboutUs'
import Project from '../Componenet/Project'
import Contact from '../Componenet/Contact'

const Homepage = () => {
  return (
    <div className="pt-24">
        <Home />
        <Service />
        <AboutUs />
        <Project />
        <Contact />
    </div>
  )
}

export default Homepage