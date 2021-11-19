import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

//class componenet
class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: undefined
    }
  }

  changeHandler(e) {
    this.setState({userInput: e})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.changeHandler(e.target.value)}></input>
        <p>{JSON.stringify(this.state.userInput)}</p>
      </div>
    ) 
  }
}
 
export default App;

