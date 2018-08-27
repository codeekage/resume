import React from 'react'

const Service = () => {
    return (
        <div>
            <div className="what-i-do" id="Services">
                <div className="what-i-do-bg bg-pink"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <i className="far fa-bookmark"></i> What I Do</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>
                                <i className="fab fa-android"></i>
                            </h3>
                            <h5>Mobile Dev</h5>
                            <p>
                             <li>Android</li>
                             <li>React Native</li>
                             <li>Progressive Web Apps</li>
                             
                        </p>
                        </div>
                        <div className="col-md-4">
                            <h3>
                                <i className="fas fa-code"></i>
                            </h3>
                            <h5>Web Dev</h5>
                            <p>
                                <li>JavaScript (Node.js, MERN)</li>
                                <li>C# (ASP.NET, MVC)</li>
                                <li>JAVA (JSP, JSF)</li>
                                <li>PHP (PDO, OOP)</li>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>
                                <i className="fas fa-magic"></i>
                            </h3>
                            <h5>UI/UX Design</h5>
                            <p>
                                <li>Figma</li>
                              

                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>
                                <i className="fas fa-microphone"></i>

                            </h3>
                            <h5 className="m-0">Public Speaking</h5>
                                <small>
                                    <em>
                                        <a href = "https://foundation.nodejs.org/news/speakers-bureau"
                                        target = "_blank"
                                        rel = "noopener noreferrer" >
                                            (Node.js Speaker Bureau)
                                        </a>
                                    </em>
                                </small>
                            <ul>
                                <li>Node.js</li>
                                <li>JavaScript</li>
                                <li>Open Source</li>
                            </ul>
                           
                        </div>
                        <div className="col-md-4">
                            <h3>
                                <i className="fas fa-podcast"></i>
                            </h3>
                            <h5>Node.js Podcast</h5>
                            <p>
                                Coming Soon
                        </p>
                        </div>
                        <div className="col-md-4">
                            <h3>
                                <i className="fas fa-pencil-alt"></i>
                            </h3>
                            <h5 className="">Techincal Writing</h5>
                            <ul className="list-item">
                                <li>
                                    Documentation 
                                    <small>
                                        <em>
                                            <a className = ""
                                            href = "https://github.com/nodejsafrica/admin"
                                            target = "_blank"
                                            rel = "noopener noreferrer" > (Node.js Africa) 
                                            </a>
                                        </em>
                                    </small>
                                </li>
                                <li>Blog Post  <span> </span>
                                <small>
                                    <em>
                                        <a className = ""
                                        href = "https://github.com/nodejsafrica"
                                        target = "_blank"
                                        rel = "noopener noreferrer" >
                                        (Node.js Collection)</a>
                                    </em>
                                </small>

                                </li>
                                <li>
                                    Tutorials <span> </span>
                                    <small>
                                        <em>
                                            <a className="" href="https://github.com/nodejsafrica/workshoppers" target="_blank" rel="noopener noreferrer">(Node.js Africa)</a>
                                        </em>
                                    </small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Service;