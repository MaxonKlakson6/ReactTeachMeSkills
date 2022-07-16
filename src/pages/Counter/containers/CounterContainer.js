import React, { Component } from "react";

import Counter from "pages/Counter/components/Counter/Counter";

class CounterContainer extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      countParity: true,
    };
  }

  isEven = (number) => number % 2 === 0;

  handleIncrement = () => {
    this.setState((prevState) => {
      const nextCount = prevState.count + 1;
      return {
        count: nextCount,
        countParity: this.isEven(nextCount),
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      const nextCount = prevState.count === 0 ? 0 : prevState.count - 1;
      return {
        count: nextCount,
        countParity: this.isEven(nextCount),
      };
    });
  };

  handleReset = () => {
    this.setState({ count: 0, countParity: true });
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        parity={this.state.countParity}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
      />
    );
  }
}

export default CounterContainer;
