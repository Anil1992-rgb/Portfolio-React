import React from 'react';
import Projects from "./Projects";
import Contact from "./Contact";

import "./main.css";
import me from "../assets/me.png"
import skills from "../assets/output-onlinepngtools (1).png"
import hobbies from "../assets/hobbies.png";


function Main() {
    return (
        <div className="main-wrapper col-lg-10 offset-lg-2">
            <div className="container-fluid">
                <div className="media-body">
                    <br />
                    <h1>About Me</h1>
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        </div>
                        <div className="col-sm">
                            <img id="me" src={me} />
                        </div>
                        <div className="col-sm">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
                        </div>
                    </div>
                    <br />
                    
                </div>
                <div id="skillsRow" className="row">
                        <div className="col-sm">
                            <h2>Hobbies</h2>
                            <br/>
                            <img id="skillsLogo" src={hobbies} />

                        </div>
                        <div className="col-sm">
                            <h2>Skills</h2>
                            <br/>
                            <img id="skillsLogo" src={skills} />

                        </div>
                    </div>
            </div>
            <Projects />
            <br/>
            <Contact/>

        </div>
    )
}
export default Main;