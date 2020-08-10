import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, imgOne, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={imgOne}
          style={{ width: "6rem", height: "9rem" }}
          className="img-fluid"
          alt="product picture"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 text-muted">
        <span className="d-lg-none">price:</span>
        <strong>$</strong>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <span className="btn btn-black mx-1" onClick={() => removeItem(id)}>
          x
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <strong>item total: $</strong>
        {total}
      </div>
    </div>
  );
}
