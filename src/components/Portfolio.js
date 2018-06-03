import React from 'react'

export default () => {
    const style = {
        'color': 'orange',
         "text-transform": 'uppercase',
    }
    return (
        <div>
            <div className="portfolio-card" id="Portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center mb-2" style={style}>
                                <h6>GitHub Projects</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-1.png" alt="..." className="portfolio-img" />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-2.png" alt="..." className="portfolio-img" />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-3.png" alt="..." className="portfolio-img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-9.png" alt="..." className="portfolio-img" />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-4.png" alt="..." className="portfolio-img" />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-5.png" alt="..." className="portfolio-img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-6.png" alt="..." className="portfolio-img" />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-7.png" alt="..." className="portfolio-img" />
                        </div>
                        <div className="col-sm-4 portfolio-item">
                            <img src="images/bg-8.png" alt="..." className="portfolio-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="load">
                <a href="http://#" class="btn btn-primary">Load More</a>
            </div>
        </div>
    )
}
