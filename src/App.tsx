import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {

  const [player, setPlayer] = React.useState("X");

  return (
    <div className="App">
      <h1>Current Player: {player}</h1>
      <Board player={player} setPlayer={setPlayer} />
    </div>
  );
}

export default App;
