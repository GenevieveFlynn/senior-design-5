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
              <li><a href="#">Home</a></li>
              <li><a href="#">My Contracts</a></li>
              <li><a href="#">History</a></li>
            </ul>
          </nav>

          <button onClick={this.handleClick} className={this.state.isButtonActive ? 'hamburger is-active' : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </button>

      </header>
    );
}
};

export default Header;