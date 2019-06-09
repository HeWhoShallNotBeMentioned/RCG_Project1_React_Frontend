import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chris', age: 50 },
      { name: 'Melanie', age: 42 },
      { name: 'Monty', age: 17 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 50 },
        { name: 'Melanie', age: 42 },
        { name: 'Lily', age: 16 },
      ],
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Chris', age: 50 },
        { name: 'Melanie', age: 42 },
        { name: event.target.value, age: 16 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Christopher!!!!!!')}>
          Switch Name
        </button>
        <Person person={this.state.persons[0]} />
        <Person person={this.state.persons[1]}>I like reading.</Person>
        <Person
          person={this.state.persons[2]}
          click={this.switchNameHandler.bind(this, 'CHRIS!')}
          changed={this.nameChangedHandler}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
