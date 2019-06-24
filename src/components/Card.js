import React from "react";
import StarRatings from "react-star-ratings";
import { Capitalize } from "../constants/constants";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.ColorStatus = this.ColorStatus.bind(this);
  }

  ColorStatus(status) {
    switch (status) {
      case "open":
        return <div className="green">{Capitalize(status)}</div>;
      case "order ahead":
        return <div className="orange">{Capitalize(status)}</div>;
      case "closed":
        return <div className="red">{Capitalize(status)}</div>;
    }
  }

  render() {
    const TAorange = getComputedStyle(document.body).getPropertyValue(
      "--TAorange"
    );
    let restaurant = this.props.restaurant;

    return (
      <div className="Card">
        <div>
          <h6>{this.ColorStatus(restaurant.status)}</h6>
        </div>
        <div>
          <h3>{restaurant.name}</h3>
          <StarRatings
            rating={restaurant.sortingValues.ratingAverage}
            starDimension="20px"
            starEmptyColor="white"
            starRatedColor={TAorange}
          />
        </div>
      </div>
    );
  }
}

export default Card;
