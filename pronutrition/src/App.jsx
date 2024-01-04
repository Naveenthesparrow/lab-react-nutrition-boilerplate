import React, { Component } from "react";
import "./App.css";
import FoodBox from "./component/Foodbox";
import FoodData from "./component/Fooddata";
import Search from "./component/Search";

export default class App extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        search: " ",
      });
  }

  handleSearch = (itemInfo) => {
    this.setState({ search: itemInfo });
  };
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        {FoodData.filter((item) => {
          {
          }
          if (this.state.search == "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(this.state.search.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => {
          return (
            <div key={item.id}>
              <FoodBox food={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
