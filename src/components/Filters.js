import React from "react";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Filters">
        <div className="Filters-item">
          <h4>
            <input
              className="inputField"
              type="text"
              name="searchField"
              value={this.props.searchField}
              placeholder="Search for Restaurants"
              onChange={this.props.onSearchFieldChange}
            />
          </h4>
        </div>
        <div className="Filters-item">
          <h4>Distance</h4>
        </div>
        <div className="Filters-item">
          <h4>Rating</h4>
        </div>
        <div className="Filters-item">
          <h4>Popularity</h4>
        </div>
      </div>
    );
  }
}

export default Filters;
