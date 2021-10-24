import React from 'react';
import './Field.css';

const Field = (props: any)  => {
  return (
    <div className="Field">
      {props.value}
    </div>
  );
}

export default Field;
