import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Chris', age: 50 },
      { id: '2', name: 'Melanie', age: 42 },
      { id: '3', name: 'Monty', age: 17 },
    ],
    otherState: 'some other value',
    showPersons: false,
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

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; // or [...this.state.persons]
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const styleButton = {
      backgroundColor: 'PaleGreen',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '10px',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={styleButton} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

{
  /* <Person person={this.state.persons[0]} />
          <Person person={this.state.persons[1]}>I like reading.</Person>
          <Person
            person={this.state.persons[2]}
            click={this.switchNameHandler.bind(this, 'CHRIS!')}
            changed={this.nameChangedHandler}
          /> */
}

// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
