import React, { Component } from "react";
import Alop from "./component1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMOns = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1 className="aliu">Monster's Collection</h1>
        <input
          className="search"
          type="search"
          placeholder="Search monster"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Alop monsters={filteredMOns} />
      </div>
    );
  }
}

export default App;
