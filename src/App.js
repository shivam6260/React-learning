import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import Shirt from './Navigation/Shirt';
import Jeans from "./Navigation/Jeans";
import HomePage from "./Navigation/HomePage";
import FootWear from "./Navigation/FootWear";
import SunGlass from "./Navigation/Sunglasses";
import Jackets from "./Navigation/Jackets";
import Wallets from "./Navigation/Wallets";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jeans" component={Jeans} />
        <Route exact path="/shirt" component={Shirt} />
        <Route exact path="/footwear" component={FootWear} />
        <Route exact path="/sunglasses" component={SunGlass} />
        <Route exact path="/jacket" component={Jackets} />
        <Route exact path="/wallet" component={Wallets} />
      </Switch>
    );
        
  }
}

export default App;
