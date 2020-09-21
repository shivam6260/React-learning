import React, { Component } from "react";
import "./ShirtComponent.css";
class ShirtComponent extends Component{
  render(){
    return (
      <div className="shirtProduct">
        <h1 style={{ color: 'red' }}>{this.props.ofs}</h1>
        <h2 className="shirtHeading">{this.props.brand}</h2>
        <img
          src={this.props.source}
          alt={this.props.brand}
          className="shirtImage"
        />
        <h3 className="shirtSubHeading">Price = Rs{this.props.price}</h3>
        <h4 >Quantity = {this.props.quantity}</h4>
        <div className="shirtbtn">
          <button className="shirtButton" onClick={this.props.clickedAdd}> + </button>
          <button className="shirtButton" onClick={this.props.clickedSub}>  -  </button>
        </div>
        <h3>Total Price = {this.props.TotalPrice}</h3>
        <h4>Available Stock = {this.props.stock}</h4>
      </div>
    )
  
}
}

export default ShirtComponent;