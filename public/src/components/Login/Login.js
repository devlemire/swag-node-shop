import React, { Component } from "react";
import './Login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.proceedAsGuest = this.proceedAsGuest.bind( this );
  }

  proceedAsGuest() {
    const { history } = this.props;
    history.push('/shop');
  }

  render() {
    console.log( this.props );
    return (
      <div id="Login__parent">
        <div id="Login__child">
          <input className="Login__input" type="text" placeholder="Username" />
          <input className="Login__input" type="password" placeholder="Password" />
          <div>
            <button className="Login__btn" id="Login__loginBtn"> Login </button>
            <button className="Login__btn" id="Login__registerBtn"> Register </button>
          </div>
          <span id="Login__GuestLink" onClick={ this.proceedAsGuest }> Continue as a Guest </span>
        </div>
      </div>
    )
  }
}
