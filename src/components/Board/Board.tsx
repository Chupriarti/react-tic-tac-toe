import React from 'react';
import Field from '../Field/Field';
import './Board.css';

const Board = (props: any) => {

  const [values, setValues] = React.useState([
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]);

  return (
    <div className="Board">
        {values.map(item => <Field />)}
    </div>
  );
}

export default Board;
