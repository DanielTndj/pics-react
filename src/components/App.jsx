import { render } from "@testing-library/react";
import React from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(inputImage) {
    console.log(inputImage);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2%" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
