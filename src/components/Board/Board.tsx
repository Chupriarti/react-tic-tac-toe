import React from 'react';
import Field from '../Field/Field';
import './Board.css';

type BoardProps = {
  player: string
	setPlayer: (player: any) => void;
};

const Board: React.FC<BoardProps> = (props) => {

  const [values, setValues] = React.useState<any[]>( new Array(9).fill(null));

  const onChange = (idx: number, player: string) => {
    if (values[idx] !== null) return;
    setValues(values => [...values.slice(0, idx), player,  ...values.slice(idx + 1)]);
    props.setPlayer(props.player === "X" ? "0" : "X")
  }
  
  return (
    <div className="Board">
        {values.map((item, idx) => <Field key={idx} value={item} onClick={() => onChange(idx, props.player)} />)}
    </div>
  );
}

export default Board;
