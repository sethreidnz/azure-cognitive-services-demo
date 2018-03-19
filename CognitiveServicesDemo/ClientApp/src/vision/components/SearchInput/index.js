import React, { Component } from "react";
import "./SearchInput.css";

import { ShowingResultsFor } from "./ShowingResultsFor";

export class SearchInput extends Component {
  state = {
    searchQuery: ""
  };
  timeout = 0;
  componentWillReceiveProps(nextProps) {
    if(nextProps.searchQuery && nextProps.searchQuery !== this.state.searchQuery) {
      this.setState({ searchQuery: nextProps.searchQuery });
    }
  }
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
    const { showingResultsForText } = this.props;
    return (
      <div className="search-input control">
        <input
          className="input"
          type="search"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        { showingResultsForText && <ShowingResultsFor searchText={showingResultsForText}/> }
      </div>
    );
  }
}
