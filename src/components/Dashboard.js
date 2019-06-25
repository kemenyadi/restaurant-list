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
    //Calculate Top Restaurants according to formula

    //Filter for search query
    if (this.props.searchField) {
      //define case insensitive query
      let searchMatchREGEX = new RegExp(this.props.searchField, "i");
      data.restaurants.forEach((restaurant, key) => {
        if (restaurant.name.search(searchMatchREGEX) === -1) {
          //no match
        } else {
          //on match push
          matches.push(restaurant);
        }
      });
    } else {
      matches = data.restaurants;
    }
    //Sort according to Sorting selection
    if (this.props.sortField) {
      let temp = matches.slice(), //non mutating copy
        sortDescending = ["ratingAverage", "popularity"];
      temp.sort(
        (a, b) =>
          a["sortingValues"][this.props.sortField] -
          b["sortingValues"][this.props.sortField]
      );

      if (sortDescending.includes(this.props.sortField)) {
        temp.reverse();
      }

      matches = temp;
    }
    //Sort according to Openings state
    matches.sort((a, b) => {
      if (a.status === "open") {
        return -1;
      }
    });
    matches.sort((a, b) => {
      if (a.status === "order ahead") {
        return -1;
      }
    });
    matches.sort((a, b) => {
      if (a.status === "closed") {
        return -1;
      }
    });
    matches.reverse();
    //Sort according to Favourites
    if (this.props.likedRestaurants) {
      matches.sort((a, b) => {
        if (this.props.likedRestaurants.includes(a.name)) {
          return -1;
        } else {
          return 1;
        }
      });
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
