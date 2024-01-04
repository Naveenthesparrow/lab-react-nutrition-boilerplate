import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="flex">
        <h1 className="calorie">
          {this.props.count} {this.props.name} = {this.props.total} Calories
        </h1>
        <button className="reset" onClick={this.props.handleReset}>
          reset
        </button>
      </div>
    );
  }
}
