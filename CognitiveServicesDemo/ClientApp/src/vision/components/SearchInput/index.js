import React, { Component } from "react";
import "./SearchInput.css";

export class SearchInput extends Component {
  state = {
    searchQuery: ""
  };
  timeout = 0;
  handleChange = event => {
    const { search } = this.props;
    var searchText = event.target.value;
    if (this.timeout) clearTimeout(this.timeout);
    this.setState({ searchQuery: searchText });
    this.timeout = setTimeout(() => {
      search(searchText);
    }, 500);
  };
  render() {
    return (
      <div className="search-input control">
        <input
          className="input"
          type="search"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
