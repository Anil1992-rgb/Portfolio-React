import React from 'react';
import "./projects.css";
import movie from "../assets/movieExplorer.png"
import nba from "../assets/NBA.png"
import note from "../assets/note.png";
import burger from "../assets/burger.png";   
import weather from "../assets/weatherDashboard.png";   
import dayPlanner from "../assets/schedule.png";   


function Projects() {
    return (
        <div className="container">
            <h2 id="projectsHeader">Projects</h2>
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="false">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        {/* <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> */}
                    </ol>
                    <div className="carousel-inner" style={{ backgroundColor: "black" }}>
                        <div className="carousel-item active">
                            <img src={movie} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Movie Explorer</h5>
                                <p>Movie database web app that lets you enter a Movie title and will
                                display data on the screen such as poster image, rating, overview, trailer, and
                                    more.</p>
                                <a className="btn btn-success fas fa-play"
                                    href="https://anil1992-rgb.github.io/Movie-Explorer/" target="_blank"> Try Me!</a>
                                <a className="btn btn-success fab fa-github"
                                    href="https://github.com/Anil1992-rgb/Movie-Explorer" target="_blank"> Repo</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={nba} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>NBA FanBoi</h5>
                                <p>A complete NBA fan application that gives users real-time scores of games-in-
                                    progress, as well as team and player stats plus more to keep up-to-date on all things NBA.</p>
                                <a className="btn btn-success fas fa-play" href="https://nbafanboi.herokuapp.com/"
                                    target="_blank"> Try Me!</a>
                                <a className="btn btn-success fab fa-github"
                                    href="https://github.com/hkennedyvi/project2.github.io" target="_blank"> Repo</a>
                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <section class="projects">
                <div class="container">
                    <h2>Apps</h2>
                    <br />
                    <div class="card-deck">
                        <div class="card">
                            <img src={note} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Note Taker</h5>
                                <p class="card-text">Note taker Node command line app that lets you add/view/delete notes
                                and saves the data so you can use and see the notes on different devices or platforms.
                            </p>
                            </div>
                            <div class="card-footer">
                                <a class="btn btn-success fas fa-play" href="https://anilnotetaker.herokuapp.com/notes"
                                    target="_blank"> Try Me!</a>
                                <a class="btn btn-success fab fa-github"
                                    href="https://github.com/Anil1992-rgb/Note-Taker-WebApp" target="_blank"> Repo</a>

                            </div>
                        </div>
                        <div class="card">
                            <img src={dayPlanner} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Day Planner</h5>
                                <p class="card-text">Web app that lets you input daily tasks for hours between 9am-5pm.
                                Color coded to set apart past, present, and future hours.</p>
                            </div>
                            <div class="card-footer">

                                <a class="btn btn-success fas fa-play" href="https://anil1992-rgb.github.io/Day-Planner"
                                    target="_blank"> Try Me!</a>
                                <a class="btn btn-success fab fa-github"
                                    href="https://github.com/Anil1992-rgb/Day-Planner" target="_blank"> Repo</a>
                            </div>

                        </div>
                    </div>

                    <br />
                    <br />
                    <div class="card-deck">
                        <div class="card">
                            <img src={weather} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Weather Dashboard</h5>
                                <p class="card-text">Web app that lets you input and city name around the world and will
                                display current temperature, five-day forecast, wind-speed, humidity and more.</p>
                            </div>
                            <div class="card-footer">
                                <a class="btn btn-success fas fa-play"
                                    href="https://anil1992-rgb.github.io/Weather-DashBoard" target="_blank"> Try Me!</a>
                                <a class="btn btn-success fab fa-github"
                                    href="https://github.com/Anil1992-rgb/Weather-DashBoard" target="_blank"> Repo</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src={burger} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Burger Logger</h5>
                                <p class="card-text">Web app that lets you insert burger names to devour and delete and saves globally.
                            </p>
                            </div>
                            <div class="card-footer">
                                <a class="btn btn-success fas fa-play"
                                    href="https://theburgerlog.herokuapp.com/" target="_blank"> Try Me!</a>
                                <a class="btn btn-success fab fa-github"
                                    href="https://github.com/Anil1992-rgb/Burger-Log" target="_blank"> Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </section>
        </div>


    )
}

export default Projects;