import React from 'react';


class Counter extends React.Component {
    constructor(properties) {
      super(properties)
      this.state = {
        counter: 0
      };
    }
   
    handLeIncrementClick = e => {
      e.preventDefault();
      let counte = this.state.counter++;
      this.setState({counte})
  }
  handLeDecrementClick = e => {
    e.preventDefault();
    let counte = this.state.counter--;
    this.setState({counte})
  }
  
  render() {
    return (
      <section>
        <h3>{this.state.counter}</h3>
        <button className="Increment button" onClick={this.handLeIncrementClick}>click for Increment</button>
        <button className="Decrement button" onClick={this.handLeDecrementClick}>click for Decrement</button>
      </section>
    )
  }
  }

export default Counter;