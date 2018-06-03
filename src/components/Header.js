import React from 'react'

export default () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-pink fixed-top">
              <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="justify-content-center collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav nav-bar">
                      <li className="nav-item active">
                          <a className="nav-link txt-white" href="#">
                              <i className="fa fa-home"></i>
                              <span className="sr-only">(current)</span>
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link txt-white" href="#Portfolio">portfolio</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Reviews">reviews</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#About">about</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Services">services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Contact">contact</a>
                      </li>
                  </ul>
              </div>
          </nav>

    </div>
  )
}
