import React from 'react';
import './Field.css';

const Field = (props: any)  => {
  return (
    <div className="Field" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Field;
