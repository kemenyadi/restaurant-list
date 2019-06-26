import React from "react";
import Card from "./Card";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";
import { processJSON } from "../methods";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cards = [];
    processJSON(
      data,
      this.props.searchField,
      this.props.sortField,
      this.props.likedRestaurants
    ).forEach((restaurant, key) => {
      cards.push(
        <Card
          restaurant={restaurant}
          handleLike={this.props.handleLike}
          likedRestaurants={this.props.likedRestaurants}
        />
      );
    });
    return (
      <div className="Dashboard">
        <h1>Restaurants:</h1>
        {cards}
      </div>
    );
  }
}

export default Dashboard;
