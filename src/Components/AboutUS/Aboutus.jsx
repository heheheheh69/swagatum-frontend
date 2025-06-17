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

                                <p>MCCL Non Woven Industries, established in 2007 in Sirsa, Haryana, has grown into a leading manufacturer and wholesaler of premium flooring solutions. Under our brands *Swagatam* and *Rhythm*, we offer a wide range of products including Non-Woven Carpets, PVC Mats, Looppile, Graphic Carpets, Artificial Grass, and more. Committed to quality and innovation, we continuously upgrade our offerings to meet global standards and evolving customer needs.

                                <br /><br />
                                <b>Ready to learn more or get in touch? We're here to help—reach out to us today and let's create something amazing together.</b></p>

                            <Link to="/contac"><button className='main-btn'>Contact Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;
