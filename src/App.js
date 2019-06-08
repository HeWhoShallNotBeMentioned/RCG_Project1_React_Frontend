import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Melanie', age: '42' },
      { name: 'Chris', age: '50' },
      { name: 'Monty', age: '17' },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>
        <button>Switch Name</button>
        <Person person={this.state.persons[0]}>I like reading. A lot!</Person>
        <Person person={this.state.persons[1]} />
        <Person person={this.state.persons[2]} />
      </div>
    );
  }
}

export default App;
