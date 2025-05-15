import React from 'react'
import "./Aboutus.css"
const Aboutus = () => {
    return (
        <>
            <div className="aboutus">
                <div className="container">

                    <div className="aboutus-content">
                        <img src="./Images/about.png" alt="" />
                        <div className="aboutus-txt">
                            <div className="head">
                                <h2>
                                    About Us
                                </h2>
                                <h3>who we are ?</h3>
                            </div>

                            <p>At Swagatum, we believe that a beautiful space starts from the ground up. Our mission is to bring warmth, style, and comfort into your home through thoughtfully crafted carpets. Whether you're designing a modern living space or adding a cozy touch to a traditional room, our diverse range of carpets is designed to complement every lifestyle. <br /><br />
                                <b>Ready to learn more or get in touch? We're here to help—reach out to us today and let’s create something amazing together.</b></p>
                                
                            <button className='main-btn'>Aboutus</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;
