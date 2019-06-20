import React from "react";
import "./App.css";
import logo from "./constants/thuisbezorgd.png";
import Content from "./components/Content";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <img className="logo" src={logo} />
        </div>
        <Content />
      </div>
    );
  }
}

export default App;
