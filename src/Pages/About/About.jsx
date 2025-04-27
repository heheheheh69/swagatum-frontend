import React from 'react'
import "./About.css"
import WhyUs from '../../Components/WhyUs/WhyUs'
import Missions from '../../Components/Missions/Missions'
const About = () => {
  return (
    <>
      <div className="about main">
          <div className="contact-head">
                    <h2>About Us</h2>
          </div>
            <Missions/>
          
          <WhyUs/>
      </div>
    </>
  )
}

export default About
