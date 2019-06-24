import React from "react";

import Dashboard from "./Dashboard";
import Filters from "./Filters";

class Content extends React.Component {
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
    return (
      <div className="Content">
        <Filters
          searchField={this.state.searchField}
          handleFieldChange={this.handleFieldChange}
          sortField={this.state.sortField}
        />
        <Dashboard
          searchField={this.state.searchField}
          handleLike={this.handleLike}
          likedRestaurants={this.state.likedRestaurants}
        />
      </div>
    );
  }
}
export default Content;
