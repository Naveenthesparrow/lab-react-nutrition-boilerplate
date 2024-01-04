import React, { Component } from "react";

export default class search extends Component {
  render() {
    return (
      <div className="searchbox">
        <h1>Search Bar</h1>
        <input
          type="search"
          placeholder="type a letter & delete"
          onChange={(e) => this.props.handleSearch(e.target.value)}
        />
      </div>
    );
  }
}
