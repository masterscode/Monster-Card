import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: -1 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  };

  handleDelete = cid => {
    const counters = this.state.counters.filter(elem => elem.id !== cid);
    this.setState({ counters });
  };

  handleDelete = () => {
    const counters = this.state.counters.map(elem => {
      elem.value = 0;
      return elem;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters };
    console.log (counters[index].value);
    // this.setState({ counters });
  };

  render() {
    return (
      <>
        <button
          onClick={this.handleReset}
          style={{ backgroundColor: "lightblue" }}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
