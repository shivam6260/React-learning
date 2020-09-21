import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = (props) => {
  return (
    <div>
      <div className="product">
        <h1 className="productHeading">
          <Link to={props.linked}>{props.type}</Link>
        </h1>
        <img src={props.source} alt={props.type} className="productImage" />
      </div>
    </div>
  );
};

export default Product;
