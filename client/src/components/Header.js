import React, { Component } from "react";

import "../assets/header.css"
import img from '../assets/logo.png';

class Header extends Component {

  // Toggle the hamburger on button click 
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isButtonActive: false }
  }

  handleClick() {
    this.setState({isToggle: !this.state.isToggle});
  }

  render() {
    return (
      <div className="nav"> 

        <div className="left">
          <img src={img} className="logo"/>
          <h2>On the Block</h2>
        </div>

        <div className="middle">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Contracts</a></li>
            <li><a href="#">History</a></li>
          </ul>
        </div>
        <div className="right">
          <button className="login">Login</button>
        </div>
      </div>
    );
  }
};

export default Header;