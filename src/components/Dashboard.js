import React from "react";
import Card from "./Card";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.processJSON = this.processJSON.bind(this);
  }

  processJSON() {
    let matches = [],
      //define case insensitive query
      searchMatchREGEX = new RegExp(this.props.searchField, "i");

    data.restaurants.forEach((restaurant, key) => {
      //Calculate Top Restaurants according to formula
      let sValues = restaurant.sortingValues;
      sValues.topRestaurants =
        sValues.distance * sValues.popularity + sValues.ratingAverage;
      this.props.likedRestaurants.includes(restaurant.name)
        ? (restaurant.liked = 1)
        : (restaurant.liked = 0);
      //Filter for search query
      if (restaurant.name.search(searchMatchREGEX) === -1) {
        //no match
      } else {
        //on match push
        matches.push(restaurant);
      }
    });

    //Sort according to Sorting selection
    if (this.props.sortField) {
      let temp = matches.slice(), //non mutating copy
        sortDescending = ["ratingAverage", "popularity", "topRestaurants"];
      temp.sort(
        (a, b) =>
          a.sortingValues[this.props.sortField] -
          b.sortingValues[this.props.sortField]
      );
      //these sorting values need to be sorted descending
      if (sortDescending.includes(this.props.sortField)) {
        temp.reverse();
      }

      matches = temp;
    }

    //Sort according to Openings state
    //ordering map for efficient lookup of sortIndex
    let ordering = {},
      sortOrder = ["open", "order ahead", "closed"];
    for (let i = 0; i < sortOrder.length; i++) ordering[sortOrder[i]] = i;

    matches.sort((a, b) => ordering[a.status] - ordering[b.status]);

    //Sort according to Favourites
    if (this.props.likedRestaurants) {
      matches.sort((a, b) => {
        return b.liked - a.liked;
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
