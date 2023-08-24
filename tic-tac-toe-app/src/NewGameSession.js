import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from './GameContext';
import './NewGameSession.css';

function NewGameSession() {
  const navigate = useNavigate();
  const { setPlayer1, setPlayer2 } = useGameContext();

  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleStartGame = () => {
    setPlayer1(prevPlayer1 => ({ ...prevPlayer1, name: player1Name }));
    setPlayer2(prevPlayer2 => ({ ...prevPlayer2, name: player2Name }));

    navigate('/gameplay');
  };

  return (
    <div className="new-game-container">
      <h1 className="new-game-title">New Game Session</h1>
      <div className="new-game-form">
        <label>Player 1 Name: <input type="text" value={player1Name} onChange={e => setPlayer1Name(e.target.value)} /></label>
        <label>Player 2 Name: <input type="text" value={player2Name} onChange={e => setPlayer2Name(e.target.value)} /></label>
        <button className="start-button" onClick={handleStartGame}>Start</button>
      </div>
    </div>
  );
}

export default NewGameSession;
