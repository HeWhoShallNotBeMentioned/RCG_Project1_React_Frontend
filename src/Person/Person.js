import React from 'react';
import './Person.css';
const person = props => {
  console.log(props.person);
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age}!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} />
    </div>
  );
};

export default person;
