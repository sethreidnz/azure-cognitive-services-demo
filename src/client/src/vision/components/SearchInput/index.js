import React, { Component } from "react";

export class SearchInput extends Component {
  state = {
    searchQuery: ""
  };
  timeout = 0;
  handleChange = event => {
    var searchText = event.target.value;
    if (this.timeout) clearTimeout(this.timeout);
    this.setState({ searchQuery: searchText })
    this.timeout = setTimeout(() => {
      const { search } = this.props;
      search(searchText);
    }, 500);
  };
  render() {
    const {} = this.props;
    return (
      <input
        type="search"
        value={this.state.searchQuery}
        onChange={this.handleChange}
      />
    );
  }
}
