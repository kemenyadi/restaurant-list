import React from "react";
import Card from "./Card";
import Filters from "./Filters";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";
import { processJSON } from "../methods";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "", sortField: "", likedRestaurants: [] };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleFieldChange(event) {
    const value = event.target.value,
      name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleLike(restaurantID) {
    if (!this.state.likedRestaurants.includes(restaurantID)) {
      this.setState({
        likedRestaurants: this.state.likedRestaurants.concat([restaurantID])
      });
    } else {
      this.setState({
        likedRestaurants: this.state.likedRestaurants.filter(
          item => item !== restaurantID
        )
      });
    }
  }

  render() {
    let cards = [];
    processJSON(
      data,
      this.state.searchField,
      this.state.sortField,
      this.state.likedRestaurants
    ).forEach((restaurant, key) => {
      cards.push(
        <Card
          key={key}
          restaurant={restaurant}
          handleLike={this.handleLike}
          likedRestaurants={this.state.likedRestaurants}
        />
      );
    });

    return (
      <div className="Dashboard">
        <h1>Restaurants:</h1>
        <Filters
          searchField={this.state.searchField}
          sortField={this.state.sortField}
          handleFieldChange={this.handleFieldChange}
        />
        {cards}
      </div>
    );
  }
}

export default Dashboard;
