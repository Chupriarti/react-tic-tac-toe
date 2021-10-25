import React from 'react';
import Field from '../Field/Field';
import './Board.css';

type BoardProps = {
  player: string;
  winner: string;
	setPlayer: (player: any) => void;
  setWinner: (winner: any) => void;
};

const Board: React.FC<BoardProps> = (props) => {

  const [values, setValues] = React.useState<any[]>( new Array(9).fill(null));

  React.useEffect(() => {
    if (checkIsWinner(values, props.player)){
      props.setWinner(props.player)
      return
    }
    props.setPlayer(props.player === "X" ? "0" : "X")
  }, [values])


  const checkIsWinner = (vals: any[], player: string) => {
    if (
      (vals[0] === player && vals[1] === player && vals[2] === player) ||
      (vals[0] === player && vals[3] === player && vals[6] === player) ||
      (vals[2] === player && vals[5] === player && vals[8] === player) ||
      (vals[6] === player && vals[7] === player && vals[8] === player) ||
      (vals[0] === player && vals[4] === player && vals[8] === player) ||
      (vals[3] === player && vals[4] === player && vals[5] === player) ||
      (vals[1] === player && vals[4] === player && vals[7] === player) ||
      (vals[2] === player && vals[4] === player && vals[6] === player)
    ) return true
    return false;
  }

  const onChange = (idx: number, player: string) => {
    if (values[idx] !== null || props.winner) return;
    setValues(values => [...values.slice(0, idx), player,  ...values.slice(idx + 1)]);
  }

  const onReset = () => {
    setValues(new Array(9).fill(null))
    props.setPlayer("X")
    props.setWinner("")
  }
  
  return (
    <>
      <div className="Board">
        {values.map((item, idx) => <Field key={idx} value={item} onClick={() => onChange(idx, props.player)} />)}
      </div>
      <button onClick={onReset} className="ResetButton">Reset Game</button>
    </>
  );
}

export default Board;
