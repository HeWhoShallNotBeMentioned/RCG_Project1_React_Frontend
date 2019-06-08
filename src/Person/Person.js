import React from 'react';

const person = props => {
  console.log(props);
  return (
    <p>
      I'm {props.name} and I am {props.age}!
    </p>
  );
};

export default person;
