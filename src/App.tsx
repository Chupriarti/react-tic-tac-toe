import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {

  const [player, setPlayer] = React.useState<string>("0");
  const [winner, setWinner] = React.useState<string>("");

  return (
    <div className="App">
      <h1>Current Player: {player}</h1>
      <Board player={player} setPlayer={setPlayer} setWinner={setWinner} />
      {winner && <h1>Winner: {winner}</h1>}
    </div>
  );
}

export default App;
