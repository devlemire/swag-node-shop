import React, { Component } from "react";
import './Checkout.css';

import User from '../User/User';
import SignOut from '../SignOut/SignOut';
import Swag from './Swag/Swag';

import BackArrow from 'react-icons/lib/fa/arrow-left';

export default class Checkout extends Component {
  constructor() {
    super();
    this.backToShop = this.backToShop.bind( this );
  }

  backToShop() {
    const { history } = this.props;
    history.push('/shop');
  }

  render() {
    return (
      <div id="Checkout__parent">
        <User />
        <SignOut />

        <div id="Checkout__backToShop" onClick={ this.backToShop }>
          <BackArrow id="Checkout__backArrow" />
          <span> Back to Store </span>
        </div>

        <div id="Checkout__child">
          <div id="Checkout__swagParent">
            <div id="Checkout__swagChild">
              <Swag />
              <Swag />
            </div>
          </div>

          <div id="Checkout__btnContainer">
            <button id="Checkout__btn"> Checkout </button>
          </div>
        </div>
      </div>
    )
  }
}