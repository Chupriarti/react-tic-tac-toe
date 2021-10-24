import React from 'react';
import Field from '../Field/Field';
import './Board.css';

const Board = (props: any) => {

  const [values, setValues] = React.useState<any[]>([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  const onChange = (idx: number) => {
    setValues(values => [...values.slice(0, idx), "X",  ...values.slice(idx + 1)])
  }
  return (
    <div className="Board">
        {values.map((item, idx) => <Field key={idx} value={item} onClick={() => onChange(idx)} />)}
    </div>
  );
}

export default Board;
