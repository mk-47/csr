import React, { Component } from 'react';
import ControlledCarousel from './/components/slider/index'
import LoginButton from './/components/login/index'
import LoginComponent from './/components/login-component/index'
import Header from './/components/header/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-image"></div>
        <div className="bg-text-left">
          <h1>- Be the change you wish to see in the world</h1>
        </div>
         <div className="login-component">
        <LoginComponent/>
        </div>
        <div className="bg-text">
          <h1>I am John Doe</h1>
          <p>And I'm a volunteer</p>
        </div>
        <Header/>
      </div>
    );
  }
}

export default App;
