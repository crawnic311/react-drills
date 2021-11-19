import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Class component
class App extends Component {
  constructor() {
    super()

    this.state = { 
      userInput: '',
      filterFlavors: ["Banana", "Strawberry", "Coconut", "Guava", "Watermelon"]
    }
  }

  changeHandler(e) {
    this.setState({userInput: e})
  }

  render() {
    let flavors = this.state.filterFlavors
    .filter((element, index) => {
      return element.includes(this.state.userInput)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.changeHandler(e.target.value)}></input>
        {flavors}
      </div>
    )
  } 
}

export default App;
