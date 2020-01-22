import React from "react";
import "./App.css";
import  CardList  from "./components/card-list/CardList";
import SearchBox from "./components/Search Box/SearchBox";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Frankeistein", id: "234", email: 'monsteremail@email.com' },
        { name: "Dracula", id: "23", email: 'monsteremail@email.com' },
        { name: "Pompei", id: "32", email: 'monsteremail@email.com' },
        { name: "Chockee", id: "2", email: 'monsteremail@email.com' },
        { name: "Zombie", id: "21", email: 'monsteremail@email.com' },
        { name: "Igbudu Monkey", id: "4", email: 'monsteremail@email.com' }
      ], 
      searchField: ''
    };
  }

  handleSearch = (e) =>{
    this.setState({searchField : e.target.value})
  }
  // componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(formattedData => this.setState({ monsters: formattedData }));
  // }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( eachmonster => eachmonster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (  
      <React.Fragment>
        <h1 align = 'center'>Monster App</h1>
        <SearchBox
        placeholder = 'search monsters'
        handleSearch = {this.handleSearch} />
    <CardList monsters={filteredMonsters} /> 
    </React.Fragment>
    );
  }
}

export default App;
