import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Frankeistein", id: "234" },
        { name: "Dracula", id: "23" },
        { name: "Pompei", id: "er32" },
        { name: "Chockee", id: "23ew" },
        { name: "Zombie", id: "21wer" },
        { name: "Igbudu Monkey", id: "gh4" }
      ]
    };
  }
  // componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(formattedData => this.setState({ monsters: formattedData }));
  // }

  render() {
    return (
      <div className="card-list">
        {this.state.monsters.map(monster => (
          <CardList monsters={this.state.monsters} key={monster.id}>
            <h3>{monster.name}</h3>
          </CardList>
        ))}
      </div>
    );
  }
}

export default App;
