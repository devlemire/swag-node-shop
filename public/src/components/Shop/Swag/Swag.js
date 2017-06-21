import React, { Component } from "react";
import './Swag.css';

export default class Swag extends Component {
  render() {
    return (
      <div id="Swag__parent">
        <span id="Swag__name"> Swag Name </span>
        <div id="Swag__detailsContainer">
          <div id="Swag__priceContainer">
            <span > $14.95 </span>
          </div>
          <div id="Swag__atcContainer">
            <span> Add to Cart </span>
          </div>
        </div>
      </div>
    )
  }
}