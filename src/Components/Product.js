import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const {
      id,
      title,
      imgOne,
      price,
      inCart,
      inFavorites,
    } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 align-self-center">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={imgOne}
                    alt="product img"
                    className="card-img-top"
                  />
                </Link>

                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="mb-0" disabled>
                      in bag
                    </p>
                  ) : (
                    <p className="mb-0">add to bag</p>
                  )}
                </button>
                <button
                  className="fav-btn"
                  onClick={() => {
                    value.addToFavorites(id);
                  }}
                >
                  {inFavorites ? (
                    <p className="mb-0" disabled>
                      wishlisted
                    </p>
                  ) : (
                    <p className="mb-0">wishlist?</p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="mb-0">
              <span className="mr-1 font-italic">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    imgOne: PropTypes.string,
    imgTwo: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    inFavorites: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: var(--mainmainbg);
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: var(--mainmainbg);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .fav-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--mainmainbg);
    border: 2px solid;
    border-color: var(--mainTextColor);
    color: var(--mainTextColor);
    transition: all 1s linear;
    box-shadow: none;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--mainmainbg);
    border: 2px solid;
    border-color: var(--mainTextColor);
    color: var(--mainTextColor);
    transition: all 1s linear;
    box-shadow: none;
  }

  .cart-btn:hover,
  .fav-btn:hover {
    border-color: var(--mainTextColor);
    color: var(--mainmainbg);
    background-color: var(--mainTextColor);
    cursor: pointer;
  }

  .cart-btn:focus,
  .fav-btn:focus {
    outline: none;
  }
`;
