import React from "react";
import Card from "./Card";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Dashboard">
        <h1>Restaurants:</h1>
        <Card title="Pizza" rating="2" />
        <Card title="Döner" rating="3" />
      </div>
    );
  }
}

export default Dashboard;
