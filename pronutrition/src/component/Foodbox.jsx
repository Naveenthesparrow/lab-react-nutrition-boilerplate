import React, { Component } from "react";
import List from "./List";

export default class FoodBox extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        count: 0,
        total: 0,
      });
  }

  handleCount = (noOfitem) => {
    this.setState({ count: noOfitem });
  };

  handleCalorie = () => {
    this.setState({ total: this.state.count * this.props.food.cal });
  };

  handleReset = () => {
    this.setState({
      count: 0,
      total: 0,
    });
  };

  render() {
    return (
      <div className="foodBox">
        <img src={this.props.food.img} alt="" />
        <div id="calorie">
          <h1>{this.props.food.name}</h1>
          <p>{this.props.food.cal} </p>
        </div>
        <div>
          <input
            type="number"
            value={this.state.count}
            placeholder="enter a number"
            onChange={(e) => this.handleCount(e.target.value)}
          />
          <button onClick={this.handleCalorie}>Check</button>
        </div>
        <List
          count={this.state.count}
          name={this.props.food.name}
          total={this.state.total}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}
