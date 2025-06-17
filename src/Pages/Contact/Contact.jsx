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
                            <p>Have questions or need help choosing the perfect carpet? We're here for you! Whether you're looking for design advice, fabric details, pricing, or custom options, our team at Swagatam is happy to assist. Simply fill out the form below, and we'll get back to you as soon as possible. Let's create something beautiful together — contact us today for more information!</p>
                            <div className="address">
                                <FaLocationDot />
                                <p> Khasra No. 84, New Industrial Area <br /> Village Thedi Baba Sawan Singh <br /> Sirsa-125055(Haryana)<br /></p>
                            </div>
                            <div className="address">
                                <IoCall />
                                <p>+91 9050370362 , +91 8448441376</p>
                            </div>
                            <div className="address">
                                <FaEnvelope />

                                <p>sales@swagatamcarpet.com <br />
                                    info@swagatamcarpet.com <br />
                                    account@swagatamcarpet.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <form className="contact-form" action="https://getform.io/f/bwnwryqa" method="POST">

                            <input type="text" name='Name' placeholder='Your Name' />
                            <input type="email" name="Email" placeholder='Mail Id' />
                            <input type="number" name='Contact Number' placeholder='Contact Number' />
                            <input type="text" name='Subject' placeholder='Subject' />
                            <textarea name="Message" className="textarea" placeholder='Write Your Message here'></textarea>
                            <button className="main-btn"> SEND NOW !</button>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Contact
