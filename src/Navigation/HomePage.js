import React, { Component } from "react";
import "./HomePage.css";
import { FaReact } from "react-icons/fa";
import Product from "../Comp/Product";
import {Link } from "react-router-dom";


 

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="Container">
        <div className="headerBlack">
          <h1 className="headerText">
            React Project 1 {}<FaReact color="blue" />
          </h1>
        </div>
        <div className="productDisplay">
          <Product
            type="Shirts"
            source={process.env.PUBLIC_URL + "./Shirt.jpeg"}
            money="500"
            review="4.5"
            linked="/shirt"
          />
          <Product
            type="Jeans"
            source={process.env.PUBLIC_URL + "./jeans.jpeg"}
            money="500"
            review="4.5"
            linked="/jeans"
          />
          <Product
            type="FootWear"
            source={process.env.PUBLIC_URL + "./Shoes.jpeg"}
            money="500"
            review="4.5"
            linked="/footwear"
          />
          <Product
            type="Sunglasses"
            source={process.env.PUBLIC_URL + "./Sunglass.jpeg"}
            money="500"
            review="4.5"
            linked="/sunglasses"
          />
          <Product
            type="Jackets"
            source={process.env.PUBLIC_URL + "./Jackets.jpeg"}
            money="500"
            review="4.5"
            linked="/jacket"
          />
          <Product
            type="Wallets"
            source={process.env.PUBLIC_URL + "./Wallets.jpeg"}
            money="500"
            review="4.5"
            linked="/wallet"
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
