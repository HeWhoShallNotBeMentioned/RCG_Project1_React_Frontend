import React from 'react';

const person = props => {
  console.log(props.person);
  return (
    <div>
      <p>
        I'm {props.person.name} and I am {props.person.age}!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
