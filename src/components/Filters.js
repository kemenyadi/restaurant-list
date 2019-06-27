import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <div className="Filters">
        <div className="Filters-item">
          <input
            type="text"
            name="searchField"
            value={this.props.searchField}
            placeholder="Search for Restaurants"
            onChange={this.props.handleFieldChange}
          />
        </div>
        <div className="Filters-item">
          <select
            value={this.props.sortField}
            name="sortField"
            onChange={this.props.handleFieldChange}
          >
            <option className="bold" value="">
              Sort by:
            </option>
            <option value="topRestaurants" className="italic">
              Top Restaurants
            </option>
            <option value="bestMatch">Best Match</option>
            <option value="newest">Newest</option>
            <option value="ratingAverage">Rating Average</option>
            <option value="distance">Distance</option>
            <option value="popularity">Popularity</option>
            <option value="averageProductPrice">Average Product Price</option>
            <option value="deliveryCosts">Delivery Costs</option>
            <option value="minCost">Minimum Costs</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
