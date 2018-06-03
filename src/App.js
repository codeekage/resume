import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Review from './components/Review';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import About from './components/About';
import Help from './components/Help';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="main-body">
          <Header/>
          <Profile/>
          <Portfolio/>
          <Review/>
          <About/>
          <Service/>
          <Help/>
          <Footer/>
        </div>
      </div>
    )
  }
}
