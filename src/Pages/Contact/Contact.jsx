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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo ab consequatur esse iusto nihil, perferendis facere recusandae eum voluptatibus dicta dolore. Accusamus aperiam beatae nostrum soluta voluptate ullam dolor?</p>
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
