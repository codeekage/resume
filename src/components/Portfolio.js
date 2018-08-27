import React from 'react'
import Iframe from 'react-iframe'

export default function Portfolio () {
    const style = {
        'color': 'orange',
         "textTransform": 'uppercase',
    }
    return (
        <div>
            <div className="portfolio-card" id="Portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center mb-2" style={style}>
                                <h6>About Me!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 portfolio-item">
                            <Iframe className="iframe" height="480" url="https://www.youtube.com/embed/navHxb5csZI" display="initial"
                                position="relative" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />

{/*                             <iframe width="853" height="480" src="https://www.youtube.com/embed/N6ILqSOzMy8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
 */}                        </div>
                    </div>
                  
                </div>
            </div>
          {/*   <div className="load">
                <a href="http://" className="btn btn-primary">Load More</a>
            </div> */}
        </div>
    )
}
