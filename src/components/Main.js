import React from 'react';
import "./main.css";
import me from "../assets/me.png"
import skills from "../assets/skills.png"
import hobbies from "../assets/hobbies2.png";
import AboutMeImg from "../assets/aboutMe.png";
import hobbiesGif from "../assets/hobbiesGif.gif";
import skillsHeader from "../assets/skillsLogo.png";

function Main() {
    return (
        <div className="main-wrapper col-lg-10 offset-lg-2">
            <div className="container-fluid">
                <div className="media-body">
                    <br />
                    <p><img id="aboutMeImg" src={AboutMeImg}/></p>
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col-sm about">
                        Full-Stack Web Developer with a recently acquired degree from the University of Oregon’s Coding Bootcamp and developing skills in HTML, CSS, Javascript, and more, all with responsive mobile-first design. The goal is to engage for an impressive and impactful experience. Multiple recently applied projects with unique design and operation, to define and endorse skill sets. Excited for the future of web development and eager to join a quality-driven team to launch new innovative experiences worldwide.
                        </div>
                        <div className="col-sm">
                            <img id="me" src={me} />
                        </div>
                        <div className="col-sm about">
                        Background in Business Management and Customer-Service, alongside an expanding experience and knowledge of computers, with a passion to always learn more and keep up to date with current tech. Achievements in past positions and awards for projects as well as perfect attendance, and has gained the skills necessary to become a thriving web developer.
                        </div>
                    </div>
                    <br />
                </div>
                <br/>
                <br/>
                <div id="skillsRow" className="row">
                        <div className="col-sm">
                            {/* <h2>Hobbies</h2> */}
                            <p id="gifP"><img id="hobbiesGif" src={hobbiesGif}/></p>
                            <br/>
                            <img id="skillsLogo" src={hobbies} />

                        </div>
                        <div className="col-sm">
                            {/* <h2>Skills</h2> */}
                            <p><img id="skillsHeader" src={skillsHeader}/></p>
                            <br/>
                            <img id="skillsLogo" src={skills} />

                        </div>
                    </div>
            </div>
            <br/>
        </div>
    )
}
export default Main;