import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShirtComponent from "../Comp/ShirtComponent";
import "./Shirt.css";
class Jeans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Shirt: [
        {
          brand: "Van Heusen",
          source: process.env.PUBLIC_URL + "./Jeans1.jpeg",
          price: "2500",
          quantity: 0,
          totalPrice: 0,
          stock: 10,
          ofs: "",
        },
        {
          brand: "U.S.Polo Association",
          source: process.env.PUBLIC_URL + "./Jeans2.jpeg",
          price: "500",
          quantity: 0,
          totalPrice: 0,
          stock: 5,
        },
        {
          brand: "Dennis Lingo",
          source: process.env.PUBLIC_URL + "./Jeans3.jpeg",
          price: "1500",
          quantity: 0,
          totalPrice: 0,
          stock: 8,
          ofs: "",
        },
        {
          brand: "Park Avenue",
          source: process.env.PUBLIC_URL + "./Jeans4.jpeg",
          price: "1800",
          quantity: 0,
          totalPrice: 0,
          stock: 11,
          ofs: "",
        },
        {
          brand: "Arrow Shirt",
          source: process.env.PUBLIC_URL + "./Jeans5.jpeg",
          price: "2050",
          quantity: 0,
          totalPrice: 0,
          stock: 16,
          ofs: "",
        },
       
      ],
    };
  }

  clickedAdd = (index) => {
    const newarr = this.state.Shirt;
    if (newarr[index].stock > 0) {
      newarr[index].quantity = newarr[index].quantity + 1;
      newarr[index].totalPrice = newarr[index].price * newarr[index].quantity;
      newarr[index].stock = newarr[index].stock - 1;
      this.setState({ Shirt: newarr });
    }
    if (newarr[index].stock === 0) {
      newarr[index].ofs = "Out Of Stock";
      this.setState({ Shirt: newarr });
    }
    if (newarr[index].stock !== 0) {
      newarr[index].ofs = "";
      this.setState({ Shirt: newarr });
    }
  };

  clickedSub = (index) => {
    const newarr = this.state.Shirt;
    if (newarr[index].quantity > 0) {
      newarr[index].quantity = newarr[index].quantity - 1;
      this.setState({ Shirt: newarr });
      newarr[index].totalPrice = newarr[index].price * newarr[index].quantity;
      newarr[index].stock = newarr[index].stock + 1;
    }
    if (newarr[index].stock === 0) {
      newarr[index].ofs = "Out Of Stock";
      this.setState({ Shirt: newarr });
    }
    if (newarr[index].stock !== 0) {
      newarr[index].ofs = "";
      this.setState({ Shirt: newarr });
    }
    console.log(newarr);
  };

  render() {
    const display = this.state.Shirt.map((elem, index) => {
      return (
        <ShirtComponent
          brand={elem.brand}
          source={elem.source}
          price={elem.price}
          quantity={elem.quantity}
          clickedAdd={() => this.clickedAdd(index)}
          clickedSub={() => this.clickedSub(index)}
          TotalPrice={elem.totalPrice}
          stock={elem.stock}
          ofs={elem.ofs}
        />
      );
    });
    return (
      <div>
        <div className="shirtheaderBlack">
          <h1 className="shirtmainHeading">Jeans Section</h1>
        </div>
        <div className="shirtDisplay">{display}</div>
      </div>
    );
  }
}
export default Jeans;
