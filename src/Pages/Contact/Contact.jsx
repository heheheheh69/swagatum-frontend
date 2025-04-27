import React from 'react'
import "./Contact.css"
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
const Contact = () => {
    return (
        <>
            <div className="main contact">
                <div className="contact-head">
                    <h2>Contact Us</h2>
                </div>
                <div className="container">
                    <div className="form">
                        <form className="contact-form">
                            <div className="contact-form-head">
                                <h3>Enquiry Form</h3>
                                <span>Feel Free To Contact Us!</span>
                            </div>
                            <input type="text" placeholder='Your Name*' />
                            <input type="email" placeholder='Mail Id*' />
                            <input type="number" placeholder='Contact Number*' />
                            <input type="text" placeholder='Company Name*' />
                            <input type="text" placeholder='Subject*' />
                            <textarea name="Message" className="textarea" placeholder='Message'></textarea>
                            <button className="main-btn"> SEND NOW !</button>
                        </form>
                    </div>
                    <div className="getIn">
                        <div className="get-head">
                            <h3>Get in Touch</h3>
                        </div>
                        <div className="addresses">
                            <div className="address">
                                <h2>Location</h2>
                                <p>Plot No. - 98, Near Taj Mahal</p>
                                <p>Agra</p>
                            </div>
                            <div className="address">
                                <h2>Call Us / Email</h2>
                                <p>+919874396933, +91818278723</p>
                                <p>swatamcare@gmail.com</p>
                            </div>
                            <div className="address">
                                <h2>Location</h2>
                                <p>Plot No. - 98, Near Taj Mahal</p>
                                <p>Agra</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Contact
