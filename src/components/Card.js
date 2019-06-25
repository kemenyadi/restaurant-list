import React from "react";
import StarRatings from "react-star-ratings";
import { Capitalize } from "../constants/constants";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.ColorStatus = this.ColorStatus.bind(this);
  }

  ColorStatus(status) {
    let className;

    switch (status) {
      case "open":
        className = "green";
        break;
      case "order ahead":
        className = "orange";
        break;
      case "closed":
        className = "red";
        break;
    }
    return <div className={className}>{Capitalize(status)}</div>;
  }

  render() {
    const bodyStyle = getComputedStyle(document.body),
      TAorange = bodyStyle.getPropertyValue("--TAorange"),
      starDimension = bodyStyle.getPropertyValue("--starDimension"),
      starEmptyColor = bodyStyle.getPropertyValue("--starEmptyColor"),
      likeOpacity = bodyStyle.getPropertyValue("--likeOpacity");
    let restaurant = this.props.restaurant;

    return (
      <div className="Card">
        <div
          onClick={() => this.props.handleLike(restaurant.name)}
          className="CardLike"
          style={{
            opacity: this.props.likedRestaurants.includes(restaurant.name)
              ? likeOpacity
              : undefined
          }}
        >
          ❤️
        </div>
        <div className="CardStatus">
          <h6>{this.ColorStatus(restaurant.status)}</h6>
        </div>
        <div className="CardNameRating">
          <h3>{restaurant.name}</h3>
          <StarRatings
            rating={restaurant.sortingValues.ratingAverage}
            starDimension={starDimension}
            starEmptyColor={starEmptyColor}
            starRatedColor={TAorange}
          />
        </div>
        <div className="CardDistance">
          <h4>{restaurant.sortingValues.distance / 1000} km</h4>
        </div>
      </div>
    );
  }
}

export default Card;
