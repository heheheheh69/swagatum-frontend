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
                                <h2>Enquiry <b>Form</b></h2>
                                <span>Feel Free To Contact Us!</span>
                            </div>
                            <input type="text" placeholder='Your Name*' />
                            <input type="email" placeholder='Mail Id*' />
                            <input type="number" placeholder='Contact Number*' />
                            <input type="text" placeholder='Company Name*' />
                            <input type="text" placeholder='Subject*' />
                            <textarea name="Message" className="textarea" placeholder='Message'></textarea>
                            <button className="main-btn"> <span>SEND NOW!</span></button>
                        </form>
                    </div>
                    <div className="get-cards">
                        <div className="get">
                            <h2>Get In <b>Touch!</b></h2>
                        </div>
                        <div className="get-card">
                            <div className="icon">
                                <CiMail />
                            </div>
                            <div className="card-details">
                                <h5>Mail / Phone</h5>
                                <p>swagatamsupports@gmail.com <br />9999999999</p>
                            </div>
                        </div>
                        <div className="get-card">
                            <div className="icon">
                                <CiLocationOn />
                            </div>
                            <div className="card-details">
                                <h5>Address</h5>
                                <p>Teri aaukaat se bahar taj m  hu</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
