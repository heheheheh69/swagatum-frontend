import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
const Contact = () => {
    return (
        <>
            <div className="main contact">
                <div className="contact-head">
                    <h2>Contact Us</h2>
                </div>
                <div className="container">
                <div className="getIn">
                        
                        <div className="addresses">
                            <h2>Have A Question.? </h2>
                            <h3>Let's Connect Now</h3>
                            <p>Have questions or need help choosing the perfect carpet? We’re here for you! Whether you're looking for design advice, fabric details, pricing, or custom options, our team at Swagatam is happy to assist. Simply fill out the form below, and we’ll get back to you as soon as possible. Let’s create something beautiful together — contact us today for more information!</p>
                            <div className="address">
                            <FaLocationDot />
                            <p> Plot No. - 98, Near Taj Mahal <br />Agra</p>
                            </div>
                            <div className="address">
                            <IoCall />
                                <p>+919874396933, +91818278723</p>
                            </div>
                            <div className="address">
                            <FaEnvelope />

                                <p>swatamcare@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <form className="contact-form">
                            
                            <input type="text" placeholder='Your Name*' />
                            <input type="email" placeholder='Mail Id*' />
                            <input type="number" placeholder='Contact Number*' />
                            <input type="text" placeholder='Subject*' />
                            <textarea name="Message" className="textarea" placeholder='Message'></textarea>
                            <button className="main-btn"> SEND NOW !</button>
                        </form>
                    </div>
                    
                   
                </div>
            </div>
        </>
    )
}

export default Contact
