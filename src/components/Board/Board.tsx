import React from 'react';
import Field from '../Field/Field';
import './Board.css';

const Board = (props: any) => {
  return (
    <div className="Board">
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
    </div>
  );
}

export default Board;
