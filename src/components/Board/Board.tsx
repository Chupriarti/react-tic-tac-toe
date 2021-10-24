import React from 'react';
import Field from '../Field/Field';
import './Board.css';

const Board = (props: any) => {

  const [player, setPlayer] = React.useState("X");
  const [values, setValues] = React.useState<any[]>([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

  const onChange = (idx: number, player: string) => {
    setValues(values => [...values.slice(0, idx), player,  ...values.slice(idx + 1)]);
    setPlayer(player => player === "X" ? "0" : "X")
  }
  return (
    <div className="Board">
        {values.map((item, idx) => <Field key={idx} value={item} onClick={() => onChange(idx, player)} />)}
    </div>
  );
}

export default Board;
