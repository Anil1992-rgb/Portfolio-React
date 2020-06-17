import React from 'react';
import "./projects.css";
import movie from "../assets/movieExplorer.png"
import nba from "../assets/NBA.png"
import note from "../assets/note.png";
import burger from "../assets/burger.png";
import weather from "../assets/weatherDashboard.png";
import dayPlanner from "../assets/schedule.png";
import Carousel from 'react-bootstrap/Carousel'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Projects() {
    return (
        <div className="main-wrapper col-lg-10 offset-lg-2">
            <h2 id="projectsHeader">Projects</h2>
            <Carousel align="center" style={{ width: "90%", margin: "auto" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nba}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>NBA FanBoi</h3>
                        <p>A NBA fan application that gives users real-time scores of games-in-
                                    progress, as well as team and player stats plus more to keep up-to-date on all things NBA.</p>
                        <a class="btn btn-success fas fa-play" href="https://nbafanboi.herokuapp.com/"
                            target="_blank"> Try Me!</a>
                        <a class="btn btn-success fab fa-github"
                            href="https://github.com/hkennedyvi/project2.github.io" target="_blank"> Repo</a>
                            <br/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={movie}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Movie Explorer</h3>
                        <p>Movie database web app that lets you enter a Movie title and will display data on the screen such as poster image, rating, overview, trailer, and more.</p>
                        <a class="btn btn-success fas fa-play" href="https://anilnotetaker.herokuapp.com/notes"
                            target="_blank"> Try Me!</a>
                        <a class="btn btn-success fab fa-github"
                            href="https://github.com/Anil1992-rgb/Note-Taker-WebApp" target="_blank"> Repo</a>
                            <br/>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            <section class="projects">

                <div class="container">
                    <br />
                    <CardDeck>
                        <Card>
                            <Card.Img src={note} alt="..." style={{ border: "1px solid black" }} />
                            <Card.Body>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>Note taker Node command line app that lets you add/view/delete notes
                                and saves the data so you can use and see the notes on different devices or platforms.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Row>
                                    <Col style={{ margin: "auto", textAlign: "center" }}>
                                        <a class="btn btn-success fas fa-play" href="https://anilnotetaker.herokuapp.com/notes"
                                            target="_blank"> Try Me!</a>
                                        <a class="btn btn-success fab fa-github"
                                            href="https://github.com/Anil1992-rgb/Note-Taker-WebApp" target="_blank"> Repo</a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img src={dayPlanner} alt="..." style={{ border: "1px solid black" }} />
                            <Card.Body>
                                <Card.Title>Day Planner</Card.Title>
                                <Card.Text>Web app that lets you input daily tasks for hours between 9am-5pm.
                                Color coded to set apart past, present, and future hours.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col style={{ margin: "auto", textAlign: "center" }}>
                                        <a class="btn btn-success fas fa-play" href="https://anil1992-rgb.github.io/Day-Planner"
                                            target="_blank"> Try Me!</a>
                                        <a class="btn btn-success fab fa-github"
                                            href="https://github.com/Anil1992-rgb/Day-Planner" target="_blank"> Repo</a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    <br />
                    <br />
                    <CardDeck>
                        <Card>
                            <Card.Img src={weather} class="card-img-top" alt="..." style={{ border: "1px solid black" }} />
                            <Card.Body>
                                <Card.Title>Weather Dashboard</Card.Title>
                                <Card.Text>Web app that lets you input and city name around the world and will
                                display current temperature, five-day forecast, wind-speed, humidity and more.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col style={{ margin: "auto", textAlign: "center" }}>
                                        <a class="btn btn-success fas fa-play"
                                            href="https://anil1992-rgb.github.io/Weather-DashBoard" target="_blank"> Try Me!</a>
                                        <a class="btn btn-success fab fa-github"
                                            href="https://github.com/Anil1992-rgb/Weather-DashBoard" target="_blank"> Repo</a>
                                    </Col>
                                </Row>

                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img src={burger} class="card-img-top" alt="..." style={{ border: "1px solid black" }} />
                            <Card.Body>
                                <Card.Title>Burger Logger</Card.Title>
                                <Card.Text>Web app that lets you insert burger names to devour and delete and saves globally.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col style={{ margin: "auto", textAlign: "center" }}>
                                        <a class="btn btn-success fas fa-play"
                                            href="https://theburgerlog.herokuapp.com/" target="_blank"> Try Me!</a>
                                        <a class="btn btn-success fab fa-github"
                                            href="https://github.com/Anil1992-rgb/Burger-Log" target="_blank"> Repo</a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    <br />
                </div>
            </section>
        </div>
    )
}

export default Projects;