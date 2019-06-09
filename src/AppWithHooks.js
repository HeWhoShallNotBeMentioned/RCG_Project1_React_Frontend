import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Melanie', age: '42' },
      { name: 'Chris', age: '50' },
      { name: 'Monty', age: '17' },
    ],
    otherState: 'This is not going to be changed by switchNameHandler',
  });

  const switchNameHandler = () => {
    console.log('switchNameHandler clicked.');
    setPersonsState({
      persons: [
        { name: 'Melaniefasfdasfasdfdsaf', age: '42' },
        { name: 'Chris', age: '50' },
        { name: 'Monty', age: '17' },
      ],
    });
  };

  const [otherState, setOtherState] = useState(
    'This is not going to be changed by switchNameHandler'
  );
  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person person={personsState.persons[0]}>I like reading. A lot!</Person>
      <Person person={personsState.persons[1]} />
      <Person person={personsState.persons[2]} />
    </div>
  );
};

export default app;

// switchNameHandler = () => {
//   console.log('switchNameHandler clicked.');
//   this.setState({
//     persons: [
//       { name: 'Melaniefasfdasfasdfdsaf', age: '42' },
//       { name: 'Chris', age: '50' },
//       { name: 'Monty', age: '17' },
//     ],
//   });
// };
