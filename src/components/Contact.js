import React from 'react';
import "./contact.css";
import contactImg from "../assets/contact.png";
import contactMe from "../assets/contactMe.png";

function Contact() {
    return (
        <div className="main-wrapper contactWrapper col-lg-10 offset-lg-2">
            <div className="container">
                <div class="card-columns">

                    <div class="card contactCards">
                        <img src="https://img.icons8.com/bubbles/100/000000/email.png" />
                        <div class="card-body">
                            <p class="card-text"><a href="mailto: burakacanbolat@gmail.com" id="emailText">burakacanbolat@gmail.com</a></p>
                        </div>
                    </div>

                    <div class="card contactCards p-3 linkedin">
                        <a href="https://www.linkedin.com/in/anil-burak-canbolat-934244193" target="_blank"><img src="https://img.icons8.com/cute-clipart/128/000000/linkedin.png" /></a> 
                        <a href="https://www.linkedin.com/in/anil-burak-canbolat-934244193" target="_blank"><p className="socialLinks">linkedin.com/in/anilburakcanbolat</p>      </a>          
                    </div>

                    <div class="card yolo text-white text-center p-3">
                        <img id="contactMe" src={contactMe} />
                    </div>

                    <div class="card yolo text-center">
                        <img id="contactImg" src={contactImg} />
                    </div>

                    <div class="card contactCards github p-3">
                        <a href="https://github.com/Anil1992-rgb" target="_blank"><img id="github" src="https://img.icons8.com/cute-clipart/128/000000/github.png" /></a>
                        <a href="https://github.com/Anil1992-rgb" target="_blank"><p className="socialLinks">github.com/Anil1992-rgb</p></a>
                    </div>
                    <div class="card contactCards">
                        <div class="card-body">
                            <img src="https://img.icons8.com/bubbles/100/000000/phone-not-being-used.png" />
                            <p class="card-text phone">+1(503)-863-4661</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;