import React from 'react'


const About =  () => {
    const style = {
        width : '70%'
    }
    return (
        <div>
            <div className="about-me" id="About">
                <div className="container" style={style}>
                    <div className="row about-me-item">
                        <div className="col-md-6  about-me-item">
                            <h4>
                                <i className="far fa-user"></i> About Me</h4>
                            <br />
                            <p>
                                Hello, I love what I do, and What I do is a representation of who I am... I only aspire to be a version of my self through my works and self discipline. I love learning and that makes me stay focus on building wonderful products. I'm a Full-Stack JavaScript
                                Developer, An advocate for Open Web!
                        </p>
                            <br />
                            <p>
                                Want to build something awesome with me? I'm really waiting to hear your idea and make my contributions to best suit your desires.
                        </p>
                        </div>
                        <div className="col-md-3  about-me-item">
                            <h4>
                                <i className="far fa-hand-peace"></i> Work History</h4>
                            <br />
                            <h5>Junior Developer</h5>
                            <p className="about-me-work mb-0">
                                <i className="far fa-building"></i> Yelocode Systems</p>
                            <p className="about-me-work">
                                <i className="far fa-clock"></i> June 2017 - August 2017
                        </p>
                            <h5>Technical Writer (Internship)</h5>
                            <p className="about-me-work mb-0">
                                <i className="far fa-building"></i> Dshaw LLC</p>
                            <p className="about-me-work">
                                <i className="far fa-clock"></i> June 2018 - To Date
                        </p>
                        </div>
                        <div className="col-md-3  about-me-item">
                            <h4>
                                <i className="far fa-thumbs-down"></i> Education</h4>
                            <br />
{/*                             <h5>National Institue of Information Technology</h5>
 */}                            <p className="about-me-work mb-0">
                                <i className="far fa-building"></i> National Institue of Information Technology</p>
                            <p className="about-me-work">
                                <i className="far fa-clock"></i> June 2015 - August 2018 
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
