import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../Toast/ToastCustom.css";
import {RiLinkedinBoxFill, RiGithubFill} from "@remixicon/react";

const Contact = () => {

    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "9d163d33-f615-4dcc-a67f-07c36fbfc027");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setLoading(false);

        if (data.success) {
            toast.success("Your message has been sent!", {
                position: "top-center",
                className: "custom-toast",
                autoClose: 3000,
                hideProgressBar: true,
            });
            event.target.reset();
        } else {
            toast.error("❌ " + data.message, {
                position: "top-center",
                className: "custom-toast",
                autoClose: 3000,
                hideProgressBar: true,
            });
        }
    };


    return (
        <div id='contact' className='contact'> 
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Feel free to reach out!</h1>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>maurenkwan15@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>(+62) 878-4296-4931</p>
                        </div>
                    </div>

                    <div className="social">
                        <a href="https://www.linkedin.com/in/candy-maurentia-kwan" target="_blank" rel="noopener noreferrer">
                            <button><RiLinkedinBoxFill /></button>
                        </a>
                        <a href="https://github.com/CandyMK" target="_blank" rel="noopener noreferrer">
                            <button><RiGithubFill /></button>
                        </a>
                    </div>
                </div>

                <form  onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />

                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />

                    <label htmlFor="">Write your message here</label>
                    <textarea type="message" rows="8" placeholder='Enter your message' name='message'></textarea>

                    <button type='submit' className='contact-submit'>Submit</button>
                </form>
            </div>
            
            <ToastContainer />
        </div>
    )
}

export default Contact