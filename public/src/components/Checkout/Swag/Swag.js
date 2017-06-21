import React, { Component } from "react";
import './Swag.css';

import TrashIcon from 'react-icons/lib/fa/trash';

export default class Swag extends Component {
  render() {
    return (
      <div id="CheckoutSwag__parent">
        <div id="CheckoutSwag__child">
          <span id="CheckoutSwag__price"> $14.95 </span>
          <span id="CheckoutSwag__title"> Snapback ( black ) </span>
          <TrashIcon id="CheckoutSwag__trash" />
        </div>
      </div>
    )
  }
}