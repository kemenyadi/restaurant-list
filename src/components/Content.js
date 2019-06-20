import React from "react";

import Dashboard from "./Dashboard";
import Filters from "./Filters";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "" };
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  handleChangeField(event) {
    const value = event.target.value,
      name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Content">
        <Filters
          searchField={this.state.searchField}
          onSearchFieldChange={this.handleChangeField}
        />
        <Dashboard searchField={this.state.searchField} />
      </div>
    );
  }
}
export default Content;
