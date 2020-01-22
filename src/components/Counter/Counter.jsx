import React, { Component } from "react";

class Counter extends Component {


  getBadgeClasses = () => {
    let classes = this.props.counter.value <= 0 ? "empty" : "not-empty";
    return classes;
  };

  formatCount = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  };


  render() {
  
    return (
      <div>
        
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        
        <button onClick={ () => this.props.onIncrement(this.props.counter) }>Increment</button>
       
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={ () => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
