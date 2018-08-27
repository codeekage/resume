import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from 'react-router'

const Contact = () => {
    return (
        <div>
            <div className="contact" id="Contact">
                <div className="contact-bg bg-pink"></div>

                <div className="row">
                    <div className="col-md-12 title">
                        <h4>Want to discuss a project?</h4>
                        <p>Just Drop a Message Below And I'll Get In Touch With You</p>
                    </div>
                </div>
                <div className="row info">
                    <div className="col-md-4">
                        <h3>
                            <i className="fas fa-envelope"></i>
                        </h3>
                        <h5>Queries</h5>
                        <p className="mb-0">
                            <i className="fab fa-google"></i> agiriabrahamjunior@gmail.com</p>
                        <p className="mb-0">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/codeekage/ask-me" className="txt-white">github.com/codeekage/ask-me</a>
                        </p>

                    </div>
                    <div className="col-md-4">
                        <h3>
                            <i className="fas fa-phone"></i>
                        </h3>
                        <h5>Call Me</h5>
                        <p className="mb-0">
                            <i className="fab fa-skype"></i> Abraham-Junior </p>
                        <p>+234 90 7990 9089</p>
                    </div>
                    <div className="col-md-4">
                        <h3>
                            <i className="fas fa-home"></i>
                        </h3>
                        <h5>Office</h5>
                        <p className="mb-0">
                            <i className="fas fa-map-marker-alt"></i> My Home in Africa</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
            <div className="text-center">
                           <ul className="social">
                        <li className="social-item">
                            <a href = "https://twitter.com/codeekage"
                            rel = "noopener noreferrer"
                            target = "_blank"
                            className = "txt-white" >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href = "https://linkedin.com/in/agiriabrahamjunior"
                            rel = "noopener noreferrer"
                            target = "_blank"
                            className = "txt-white" >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://github.com/codeekage" rel="noopener noreferrer" className="txt-white">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
