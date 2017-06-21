import React, { Component } from "react";
import './Search.css';

import CartIcon from 'react-icons/lib/fa/shopping-cart';

export default class Search extends Component {
  constructor() {
    super();
    this.showCart = this.showCart.bind( this );
  }

  showCart() {
    const { history } = this.props;
    history.push('/checkout');
  }

  render() {
    return (
      <div id="Search__parent">
        <div id="Search__child">
          <input id="Search__input" placeholder="Search by type of swag.." />
          <div id="Search__cartContainer" onClick={ this.showCart }>
            <span id="Search__cartNumber"> 0 </span>
            <CartIcon id="Search__cartIcon" />
          </div>
        </div>
      </div>
    )
  }
}