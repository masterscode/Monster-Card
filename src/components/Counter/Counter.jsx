import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags : []
  };

  render() {
    return (
      <div>
        {/* <img src="{this.state.imgUrl}" alt="test" srcset=""/> */}

        <span className={this.getBadgeClasses() }>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
   let classes = this.state.count === 0 ? "empty" : "not-empty";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
