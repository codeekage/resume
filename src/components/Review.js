import React from 'react'

export default function Review () {
    return (
        <div>
            <div className="review-bg"></div>
            <div className="reviews bg-pink" id="Reviews">
                <div className="container">
                    <div className="row review-text justify-content-center">
                        <p className="txt-white ">God Father of Node.js and Coach/Mentor.
                    </p>
                    </div>
                  {/*   <div className="row d-none">
                        <p className="txt-white justify-content-center">Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. There’s no need to add a className to as they use a pseudo-className. However, you can still force the same active appearance with .active
                            (and include the aria-pressed="true" attribute) should you need to replicate the state programmatically.
                    </p>
                    </div>
                    <div className="row d-none">
                        <p className="txt-white justify-content-center">Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. There’s no need to add a className to as they use a pseudo-className. However, you can still force the same active appearance with .active
                            (and include the aria-pressed="true" attribute) should you need to replicate the state programmatically.
                    </p>
                    </div> */}
                    <div className="row">
                        <ul className="col-md-4 review-img justify-content-center">
                          {/*   <li className="review-img-item">
                                <img src="images/avatar.jpg" alt="" className="rounded medium" />
                            </li> */}
                            <li className="review-img-item">
                                <img src="https://avatars3.githubusercontent.com/u/4322?s=460&v=4" alt="" className="rounded medium" />
                                <p className="txt-white">Dan Shaw (@dshaw)</p>
                            </li>
                            {/* <li className="review-img-item">
                                <img src="images/ryan.jpg" alt="" className="rounded medium" />
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
