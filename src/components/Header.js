import React from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';

// import me from "../assets/me.JPG";
import logo3 from "../assets/logo.jpg";
// import coder from "../assets/pov.jpg";
// import Main from "./Main.js"


function Header() {
    return (
        <header className="header text-center col-lg-2">
            <div className="force-overflow">
                <div className="row">
                    <img id="logo3" src={logo3}/>
                </div>

                <nav>
                    <div className="profile-section">
                        {/* <img className="profile-image mb-3 rounded-cirlce mx-auto" src={me} /> */}
                        {/* <img id="coder" src={coder}/> */}
                        <br/>
                        <div className="bio mb-3">Hi! My name is Burak Canbolat and i am a full stack developer.<br/>
                        Welcome to my personal website!</div>
                        <br/>
                        <br/>
                        <ul className="social-list list-inline">
                            <li className="list-inline-item">
                                <a className="btn btn-primary fab fa-github" href="https://github.com/Anil1992-rgb"
                                    target="_blank"></a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-primary fab fa-linkedin"
                                    href="https://www.linkedin.com/in/anil-burak-canbolat-934244193" target="_blank"></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <br/>
                <ul className="navbar-nav flex-column text-left">
                    <li className="nav-item">
                        {/* <a className="nav-link fas fa-user" href="/"> About Me</a> */}
                        <NavLink to="/">Main</NavLink>

                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link fas fa-project-diagram" href="./projects"> Projects</a> */}
                        <NavLink to="/projects">Projects</NavLink>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link fas fa-file" href="../assets/ResumePDF.pdf" target="_blank"> Resume</a>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link fas fa-envelope" href="./contact"> Contact</a> */}
                        <NavLink to="/contact">Contact</NavLink>

                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
