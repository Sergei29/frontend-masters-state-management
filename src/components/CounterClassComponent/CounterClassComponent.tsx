import React, { Component } from "react";

const getStateFromLocalStorage = () => {
  let state = localStorage.getItem("counterState");
  if (!state) return { count: 0 };
  return JSON.parse(state);
};

type Props = {
  max: number;
  step: number;
};

type State = {
  count: number;
};

export class CounterClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = getStateFromLocalStorage();
  }

  componentDidMount() {
    this.updateDocTitle();
  }
  componentDidUpdate() {
    localStorage.setItem("counterState", JSON.stringify(this.state));
    this.updateDocTitle();
  }

  increment = () => {
    this.setState(
      (prevState, props) => {
        if (prevState.count >= props.max) return;
        return { count: prevState.count + props.step };
      },
      () => console.log(`Count: ${this.state.count}`)
    );
  };
  decrement = () =>
    this.setState((prevState, props) => {
      if (prevState.count === 0) return;
      return { count: prevState.count - props.step };
    });

  reset = () => this.setState(() => ({ count: 0 }));
  updateDocTitle = () => {
    document.title = `Count:${this.state.count}`;
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>Count: {count}</p>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>{" "}
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

export default CounterClassComponent;
