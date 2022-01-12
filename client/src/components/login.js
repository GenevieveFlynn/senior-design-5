import React, { Component } from "react";

import "../assets/login.css"

class Login extends Component {
    
    render() {
        return (
            <form>
                <h1> Login </h1>
                <input type="text" placeholder="username"></input>
                <input type="Text" placeholder="password"></input>
                <input type="submit" value="Login"></input>
                {/* <span>Forgot <a href="">password</a></span> */}
            </form>
        );
    }
}

export default Login;