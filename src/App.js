import React, { Component } from "react";
import CardList from './components/card-list/card-list.component.jsx';
import SearchField from './components/search-field/search-field.component.jsx';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      filteredMonsters: ''
    }

    // this.changeSearch = this.changeSearch.bind(this);
  }

  componentDidMount() {
    this.getSWAPI();
  }

  changeSearch = (e) => {
    this.setState({searchField: e.target.value});
  }
  
 
  getSWAPI() {
    var url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then((res) => res.json())
      .then((users) => {
        this.setState({monsters: users});
      })
  };

  render() {
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1>Monster Search</h1>
      <SearchField 
        handleChange={this.changeSearch} 
        placeHolder='SEARCH'
      />
      {/*
        <input type="search" placeholder="Search monster" onChange={e => this.onSearchChange(e)} />
      */}
      <CardList monsters={filteredMonsters}>
      </CardList>
      </div>
    );
  }
}

export default App;
