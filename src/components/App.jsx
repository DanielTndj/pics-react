import React from "react";
import Unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (inputImage) => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: inputImage,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2%" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <ImagesList images={this.state.images} /> */}
        <p>Found: {this.state.images.length} images</p>
      </div>
    );
  }
}

export default App;
