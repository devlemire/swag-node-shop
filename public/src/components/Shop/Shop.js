import React, { Component } from "react";
import './Shop.css';

import User from '../User/User';
import SignOut from '../SignOut/SignOut';
import Search from './Search/Search';
import Swag from './Swag/Swag';

export default class Shop extends Component {
  componentDidMount() {

  }
  
  render() {
    const { history } = this.props;
    return (
      <div id="Shop__parent">
        <User />
        <SignOut />

        <div id="Shop__child">
          <Search history={ history } />

          <div id="Shop__swagParent">
            <div id="Shop__swagChild">
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
              <Swag />
            </div>
          </div>
        </div>
      </div>
    )
  }
}