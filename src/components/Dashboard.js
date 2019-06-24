import React from "react";
import Card from "./Card";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.processJSON = this.processJSON.bind(this);
  }

  processJSON() {
    let matches = [];
    if (this.props.searchField) {
      let searchMatchREGEX = new RegExp(this.props.searchField, "i");
      data.restaurants.forEach((restaurant, key) => {
        if (restaurant.name.search(searchMatchREGEX) === -1) {
        } else {
          matches.push(restaurant);
        }
      });
    } else {
      matches = data.restaurants;
    }
    return matches;
  }

  render() {
    let cards = [];
    this.processJSON().forEach((restaurant, key) => {
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
