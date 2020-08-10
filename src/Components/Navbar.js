import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar px-sm-5">
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
        </nav> */}
        <nav className="p-1 nav-two mx-auto">
          <span className="nav-item ">
            <Link to="/" className="mainLink">
              Products
            </Link>
          </span>
          <span>
            <Link to="/cart" className="mainLink">
              My bag
            </Link>
          </span>
          {/* <span>
            <Link to="/favorites" className="mainLink">
              Wishlist
            </Link>
          </span> */}
        </nav>
      </div>
    );
  }
}
