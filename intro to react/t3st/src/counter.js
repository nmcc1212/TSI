import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click to increment</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default Counter;
