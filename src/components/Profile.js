import React from 'react'

export default function Profile() {
    return (
        <div>
            <div className="fancy-bg"></div>
            <div className="details bg-pink">
                <div className="text-center">
                    <img src="images/aj_1.png" className="rounded large" alt="Agiri Abraham Jr" />
                </div>
                <div className="text-center">
                    <h3 className="txt-white">Agiri Abraham Jr.</h3>
                </div>

                <div className="text-center">
                    <h6 className="txt-white">Software Developer</h6>
                </div>

                <div className="text-center">
                    <div className="underline">
                        <span></span>
                    </div>
                </div>

                <div className="text-center">
                    <ul className="social">
                        <li className="social-item">
                            <a href="http://twitter.com/codeekage" target="_blank" className="txt-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="https://linkedin.com/in/agiriabrahamjunior/" target="_blank" className="txt-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="http://medium.com/codeekage" target="_blank" className="txt-white">
                                <i className="fab fa-medium"></i>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="http://github.com/codeekage" className="txt-white">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
