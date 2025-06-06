import React from 'react'
import "./Aboutus.css"
import { Link } from 'react-router-dom';

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

                            <p>MCCL Non Woven Industries started in 2007 with a small manufacturing unit in Sirsa, Haryana. Through dedication, innovation, and a focus on quality, we have grown into a leading manufacturer and wholesaler of a wide range of flooring solutions. <br />

Under our trusted brands Swagatam and Rhythm, we offer high-quality Non-Woven Carpets, PVC Mats, Looppile, Graphic Carpets, and Artificial Grass Mats. Our product line also includes Tent and Banquet Carpets, Printed Carpets, Cushion Mats, Door Mats, Designer 3D Carpets, and more. <br />

In an evolving and competitive market, we stay ahead by using the latest technology and continuously upgrading our products to meet global standards and customer expectations.
 <br /><br />
                                <b>Ready to learn more or get in touch? We're here to help—reach out to us today and let's create something amazing together.</b></p>
                                
                            <button className='main-btn'><Link to="/about">About Us</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;
