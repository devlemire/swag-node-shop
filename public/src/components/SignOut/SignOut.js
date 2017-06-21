import React, { Component } from "react";
import './SignOut.css';

import SignOutIcon from 'react-icons/lib/fa/sign-out';

export default class SignOut extends Component {
  render() {
    return (
      <div id="SignOut__parent">
        <SignOutIcon id="SignOut__icon" />
        <span> Sign Out </span>
      </div>
    )
  }
}