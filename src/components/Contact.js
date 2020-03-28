import React from 'react';
import "./contact.css";

function Contact() {
    return(
        <section class="contact">
            <div class="container">
                <h2 id="contact">Contact</h2>
                <br/>
                <div class="myInfo">
                    <p class="badge badge-primary first">Email:</p>
                    <p class="badge badge-warning second">alancturk1992@gmail.com</p>
                    <br/>
                    <p class="badge badge-primary first smaller">Phone:</p>
                    <p class="badge badge-warning second smaller">(503)-863-4661</p>
                </div>

                <form id="contact-form">
                    <ul>
                        <li>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Smith"/>
                        </li>
                        <li>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="example@gmail.com"
                                required="required"/>
                        </li>
                        <li>
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required="required"></textarea>
                        </li>
                    </ul>
                    <input type="submit"/>
                </form>
            </div>
        </section>
    )
}

export default Contact;