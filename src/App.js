import React, { Component } from "react";
import Routers from "./components/Router";
import "./style/app.css";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <>
        <Routers />
        <Content />
      </>
    );
  }
}

export default App;
