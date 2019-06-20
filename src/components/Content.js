import React from "react";

import Dashboard from "./Dashboard";
import Filters from "./Filters";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Content">
        <Filters />
        <Dashboard />
      </div>
    );
  }
}
export default Content;
