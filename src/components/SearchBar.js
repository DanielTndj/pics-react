import React from "react";

class SearchBar extends React.Component {
  state = { imageInput: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.imageInput);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ imageInput: e.target.value })}
              value={this.state.imageInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
