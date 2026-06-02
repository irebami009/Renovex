import React from 'react'
import Home from '../Componenet/Home'
import Service from '../Componenet/Service'
import AboutUs from '../Componenet/AboutUs'
import Project from '../Componenet/Project'
import Contact from '../Componenet/Contact'

const Homepage = () => {
  return (
    <div className="pt-24">
        <div id="home"><Home /></div>
        <div id="services"><Service /></div>
        <div id="about"><AboutUs /></div>
        <div id="projects"><Project /></div>
        <div id="contact"><Contact /></div>
    </div>
  )
}

export default Homepage