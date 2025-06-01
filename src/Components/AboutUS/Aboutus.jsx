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

                            <p>MCCL Non Woven Industries  started its journey  way back in 2007’s, with a small set-up at Sirsa,,Haryana as a Manufacture  of Non woven carpets and Textile Carpet . Gradually, with hard work, dedication and high quality, we are manufacturing a complete range of Non Woven carpet, PVC Mat, Looppile, Graphic carpet and Artificial Grass Mat .

Today, with the brand name of Swagatam and Rhythm in carpet industries , it is an established name in the industry known for providing finest quality products. We are a reputed Manufacturer and wholesaler of Tent House and Banquet Carpets, Printed Carpets, PVC Mat Floorings, Cushion Mats, Door Mats, Artificial Grass and Designer 3D Carpets.

In today’s competitive times, carpet industry in India is focusing on manufacturing globally competitive product range by making use of the latest technology & innovation. By serving the growing requirements of our clients, we constantly upgrade our quality product range to be on the competitive edge among other carpet companies in India.
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
