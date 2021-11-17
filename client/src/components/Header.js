import React, { Component } from "react";

import "./Header.css";

class Header extends Component {

  // Toggle the hamburger on button click 
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isButtonActive: false }
  }

  handleClick() {
    this.setState({
      isButtonActive: !this.state.isButtonActive
    })
  }

  render() {
    return (
      <header>
          <h1>On the Block</h1>
          <nav>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">MY CONTRACTS</a></li>
              <li><a href="#">HISTORY</a></li>
            </ul>
          </nav>
          <nav className="left-nav">
            <ul>
              <i className="fa fa-bell fa-lg" aria-hidden="true"><a href="#"></a></i>
              <i className="fa fa-cog fa-lg" aria-hidden="true"><a href="#"></a></i>
              <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"><a href="#"></a></i>
            </ul>
          </nav>
          <button onClick={this.handleClickfa} className={this.state.isButtonActive ? 'hamburger is-active' : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </button>

      </header>
    );
}
};

export default Header;