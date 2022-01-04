
import React from "react";
import './Footer.css'
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faHome, faMap, faMapMarked, faMapMarkedAlt, faPhoneVolume, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="left-container text-start">
                                <h1>World Tour Age</h1>

                                <div className="icons-container d-flex text-center ">
                                
                                    <FontAwesomeIcon className="m-1 text-primary" icon={faHome} />
                                <FontAwesomeIcon className="m-1 text-primary" icon={faUserFriends} />
                                    <FontAwesomeIcon className="m-1 text-primary" icon={faMapMarked} />
                                
                                </div>
                                    <small>
                                        The island is locally known as Narikel Jinjira because there are plenty of coconut trees on the island.
                                    </small>
                                
                                <p className="">
                                    <small>Zemez © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                            <Nav.Link  as={Link} to="">Home</Nav.Link>
                            <Nav.Link  as={Link} to="">service</Nav.Link>
                            <Nav.Link  as={Link} to="">Tour-plan</Nav.Link>
                            <Nav.Link  as={Link} to="">Offer-plan</Nav.Link>
                               
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-footer-container">
                                <h5>Sign up for the newsletter</h5>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                        <h6>01811177722</h6>
                                
                                </div>
                                <div className=" d-flex align-items-center justify-content-center">

                                    <div>
                                        <p>
                                            Northeastern Part Of Bay of Bengal  ,
                                            <br />9 km of Coxs Bazar-Teknaf
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;