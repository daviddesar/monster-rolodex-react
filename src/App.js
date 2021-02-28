import './App.css';
import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [],
    }
  }

  onChangeTextField = (event) => {
    this.setState({searchField: event.target.value})
  }
  render() {
    const {monsters, searchField} = this.state;
    const searchMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().search(searchField.toLowerCase()) !== -1
    })
    return (
      <div className="App">
        <input placeholder="Search monster" onChange={(e) => this.onChangeTextField(e)} />
        <CardList monsters={searchMonsters} />
        
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