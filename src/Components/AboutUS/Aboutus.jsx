import React from 'react'
import "./Aboutus.css"
const Aboutus = () => {
  return (
    <>
        <div className="aboutus">
            <div className="container">
                <div className="heading">
                    <h2>
                        About Us
                    </h2>
                </div>
                <div className="about-content">
                    <img src="./src/assets/about.jpeg" alt="" />
                    <div className="about-txt">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        <h3>Swagatam</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius veritatis, optio cum placeat laudantium culpa impedit laboriosam deserunt sunt atque sit, iste quisquam ipsam assumenda illo aut delectus laborum molestias!</p>
                        <button className='main-btn'><a href="/about"  target='_blank'>Adout us</a></button>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Aboutus
