import React, { Component } from "react";

import Counter from "pages/Counter/components/Counter/Counter";

class CounterContainer extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      isEven: true,
    };
  }

  isEven = (number) => number % 2 === 0;

  handleIncrement = () => {
    this.setState((prevState) => {
      const nextCount = prevState.count + 1;
      return {
        count: nextCount,
        isEven: this.isEven(nextCount),
      };
    });
  };

  handleDecrement = () => {
    if (this.state.count !== 0) {
      this.setState((prevState) => {
        const nextCount = prevState.count - 1;
        return {
          count: nextCount,
          isEven: this.isEven(nextCount),
        };
      });
    }
  };

  handleReset = () => {
    this.setState({ count: 0, isEven: true });
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        isEven={this.state.isEven}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
      />
    );
  }
}

export default CounterContainer;
