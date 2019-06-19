import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: '84', name: 'Chris', age: 50 },
      { id: '27', name: 'Melanie', age: 42 },
      { id: '31', name: 'Monty', age: 17 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  // switchNameHandler = newName => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 50 },
  //       { name: 'Melanie', age: 42 },
  //       { name: 'Lily', age: 16 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      btnClass = Classes.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(Classes.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(Classes.bold);
    }

    return (
      <div className={Classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
