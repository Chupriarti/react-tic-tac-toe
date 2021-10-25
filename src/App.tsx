import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {

  const [player, setPlayer] = React.useState<string>("0");
  const [winner, setWinner] = React.useState<string>("");

  return (
    <div className="App">
      {winner ? <h1>Winner: {winner}</h1> : <h1>Current Player: {player}</h1>}
      <Board player={player} winner={winner} setPlayer={setPlayer} setWinner={setWinner} />
    </div>
  );
}

export default App;
