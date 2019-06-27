import React from "react";
import "./App.css";
import logo from "./constants/thuisbezorgd.png";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <img className="logo" src={logo} alt="thuisbezorgd"/>
        </div>
        <div className="Content">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
