import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from './GameContext';
import './HomePage.css';

function HomePage() {
  const { player1, player2 } = useGameContext();

  return (
    <div className="homepage-container">
      <h1 className="title">Tic-Tac-Toe Game</h1>
      <div className="stats">
        <p>{player1.name} wins: {player1.wins}</p>
        <p>{player2.name} wins: {player2.wins}</p>
      </div>
      <div className="button-container">
        <Link to="/new-game">
          <button>Start New Game</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
