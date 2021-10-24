import React from 'react';
import Field from '../Field/Field';
import './Board.css';

const Board = (props: any) => {

  const [values, setValues] = React.useState([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  return (
    <div className="Board">
        {values.map(item => <Field value={item} />)}
    </div>
  );
}

export default Board;
