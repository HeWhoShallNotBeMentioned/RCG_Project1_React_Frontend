import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
  const style = {
    '@media (min-width: 500px)': {
      backgroundColor: 'powderblue',
      width: '450px',
    },
  };
  return (
    <div style={style} className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
