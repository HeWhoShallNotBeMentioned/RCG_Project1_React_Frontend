import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

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
    const styleButton = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'purple',
        color: 'yellow',
      },
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
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      styleButton.backgroundColor = 'red';
      styleButton[':hover'] = {
        backgroundColor: 'pink',
        color: 'black',
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working!</p>
        <button style={styleButton} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);

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
