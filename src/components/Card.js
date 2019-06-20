import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Card">
        <h3>{this.props.name}</h3>
        <h2>{this.props.rating}/5</h2>
      </div>
    );
  }
}

export default Card;
