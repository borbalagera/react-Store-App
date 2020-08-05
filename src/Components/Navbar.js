import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm px-sm-5">
          <Link to="/">
            <i className="fas fa-tshirt navbar-brand"></i>
          </Link>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              wishlist
              <span className="ml-1">
                <i className="fas fa-clipboard-list"></i>
              </span>
            </ButtonContainer>
            <ButtonContainer>
              my bag
              <span className="ml-1">
                <i className="fas fa-shopping-bag"></i>
              </span>
            </ButtonContainer>
          </Link>
        </nav>
        <nav className="nav-two">
          <span className="nav-item ">
            <Link to="/home" className="mainLink">
              Home
            </Link>
          </span>
          <span className="nav-item ">
            <Link to="/home" className="mainLink">
              Products
            </Link>
          </span>
          <span>
            <Link to="/" className="mainLink">
              What's New
            </Link>
          </span>
        </nav>
      </div>
    );
  }
}
