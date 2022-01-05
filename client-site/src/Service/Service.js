import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight, faCode } from '@fortawesome/free-solid-svg-icons';
import './service.css';

//single member component

const Service = (props) => {
    const { img, name, price, offer, description } = props.programmer;
    return (
        <div className="programmers">
            <img src={img} alt="" />
            <div className="programmersDetails">
                <h2 className="memberName"> <small>{name}</small> </h2>
                <p> <small>Offer: {offer}</small></p>
                <p><small> Age: {description}</small></p>
                {/* <p> <small> Country: {country}</small></p> */}
                <h4 className="salary"> Salary: {price}</h4>
                <p>
                    <FontAwesomeIcon style={{ color: "#4267B2" }} className="social-icon" icon={faFacebookSquare} />
                    <FontAwesomeIcon style={{ color: "#1DA1F2" }} className="social-icon" icon={faLinkedin} />
                    <FontAwesomeIcon style={{ color: "#2867B2" }} className="social-icon" icon={faTwitterSquare} />
                    <FontAwesomeIcon style={{ color: "#4078c0" }} className="social-icon" icon={faGithub} />
                </p>
                <button className="hireMeBtn btn" onClick={() => props.handleHireMe(props.programmer)}><FontAwesomeIcon icon={faHandPointRight} />ADD TO CART</button>
                <button className="skillsBtn btn"><FontAwesomeIcon icon={faCode} /> ORDER</button>
            </div>
        </div>
    );
};

export default Service;
