import React from "react";
import StarRatings from "react-star-ratings";
import { Capitalize } from "../methods";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.ColorStatus = this.ColorStatus.bind(this);
    this.checkPriceFree = this.checkPriceFree.bind(this);
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

  checkPriceFree(price) {
    if (price == 0) {
      return <span className="green">NONE</span>;
    } else {
      return "€" + price;
    }
  }

  render() {
    const bodyStyle = getComputedStyle(document.body),
      TAorange = bodyStyle.getPropertyValue("--TAorange"),
      starDimension = bodyStyle.getPropertyValue("--starDimension"),
      starEmptyColor = bodyStyle.getPropertyValue("--starEmptyColor"),
      likeOpacity = bodyStyle.getPropertyValue("--likeOpacity");
    let restaurant = this.props.restaurant,
      minCost = (restaurant.sortingValues.minCost / 100).toFixed(2),
      distance = (restaurant.sortingValues.distance / 1000).toFixed(2),
      deliveryCosts = (restaurant.sortingValues.deliveryCosts / 100).toFixed(2);

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
        <code className="CardOther italic">
          <div>
            <h6>bestMatch: {restaurant.sortingValues.bestMatch}</h6>
            <h6>newest: {restaurant.sortingValues.newest}</h6>
            <h6>popularity: {restaurant.sortingValues.popularity}</h6>
            <h6>
              averageProductPrice:{" "}
              {restaurant.sortingValues.averageProductPrice}
            </h6>
          </div>
        </code>
        <div className="CardDetails">
          <h4>{distance} km</h4>
          <h6>Minimum: {this.checkPriceFree(minCost)}</h6>
          <h6>Delivery: {this.checkPriceFree(deliveryCosts)}</h6>
        </div>
      </div>
    );
  }
}

export default Card;
