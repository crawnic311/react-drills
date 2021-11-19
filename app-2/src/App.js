import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Class Component
class App extends Component {
  constructor() {
    super()

    this.state = {
      dataArray: ["Axe", "candy", "Corn", "Water Bison", "Philly Cheese Steak"]
    }
  }

  render() {
    let foodsToDisplay = this.state.dataArray
    return (
      <div>
        <h2>{foodsToDisplay[0]}</h2>
        <h2>{foodsToDisplay[1]}</h2>
        <h2>{foodsToDisplay[2]}</h2>
        <h2>{foodsToDisplay[3]}</h2>
        <h2>{foodsToDisplay[4]}</h2>
      </div>
    )
  }
}

export default App;
