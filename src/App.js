import './App.css';
import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Quan",
      monsters: []
    }
  }
  onClickHandler = () => {
    this.setState({string: "Hello React"})
  }
  render() {
    return (
      <div>
      <input placeholder="Search monster"  />
        <CardList monsters={this.state.monsters} />
        
      </div>
    )
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({monsters: data}))
  }
}

export default App;