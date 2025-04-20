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
                    <div className="get">
                        <h3>Get In <b>Touch!</b></h3>
                    </div>
                    <div className="get-cards">
                        <div className="get-card">
                            <div className="icon">
                                <CiLocationOn />
                            </div>
                            <div className="card-details">
                                <h5>Address</h5>
                                <span>Teri aaukaat se bahar taj mahal m hu aaja </span>
                            </div>
                        </div>
                        <div className="get-card">
                            <div className="icon">
                                <CiMail />
                            </div>
                            <div className="card-details">
                                <h5>Call Us / Mail</h5>
                                <span> +919999999999 <br />swagatamsupports@gmail.com </span>
                            </div>
                        </div>
                    </div>
                       <div className="form">
                       <div className="contact-form-head">
                            <h2>Enquiry <b>Form</b></h2>
                            <span>Feel Free To Contact Us!</span>
                        </div>
                        <form className="contact-form">
                            <input type="text" placeholder='Your Name*' />
                            <input type="email" placeholder='Mail Id*' />
                            <input type="number" placeholder='Contact Number*' />
                            <input type="text" placeholder='Company Name*' />
                            <input type="text" placeholder='Subject*' />
                            <textarea name="Message" className="textarea" placeholder='Message'></textarea>
                        </form>
                        <button className="main-btn"> <span>SEND NOW!</span></button>
                       </div>
                </div>
            </div>
        </>
    )
}

export default Contact
