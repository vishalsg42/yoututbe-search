import React from "react";

class SearchBar extends React.Component {
  state = {
    keyword: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.keyword);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="field" htmlFor="search-box">
            Search videos
          </label>
          <input
            type="search"
            value={this.state.keyword}
            onChange={(e) => this.setState({ keyword: e.target.value })}
            id="search-box"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
