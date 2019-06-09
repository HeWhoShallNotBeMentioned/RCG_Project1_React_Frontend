import React from 'react';
import './Person.css';
const person = props => {
  console.log(props.person);
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.person.name} and I am {props.person.age}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.person.name} />
    </div>
  );
};

export default person;
