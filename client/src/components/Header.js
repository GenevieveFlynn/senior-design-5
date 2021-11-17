import React, { Component } from "react";

import "./Header.css";

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
      <header>
          <img src={img} className="logo"/>
          <h1>On the Block</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">My Contracts</a></li>
              <li><a href="#">History</a></li>
            </ul>
          </nav>
          <nav className="left-nav">
            <ul>
              <i className="fa fa-bell fa-lg" aria-hidden="true"><a href="#"></a></i>
              <i className="fa fa-cog fa-lg" aria-hidden="true"><a href="#"></a></i>
              <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"><a href="#"></a></i>
              <button className="login">Login</button>
            </ul>
          </nav>

          <button onClick={this.handleClickfa} className={this.state.isToggle ? "hamburger" : "hamburger in-action"}>
            <span></span>
            <span></span>
            <span></span>
          </button>

      </header>
    );
}
};

export default Header;