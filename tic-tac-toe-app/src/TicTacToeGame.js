import React, { useState } from 'react';
import './tic-tac-toe.css';
import { useGameContext } from './GameContext';
import { Link } from 'react-router-dom';

function TicTacToeGame() {
 const { player1, player2, setPlayer1, setPlayer2 } = useGameContext();
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    // Define winning combinations
    const winCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
        setWinner('draw');
      }
    };
  
    const handleTileClick = (index) => {
      if (!board[index] && !winner) {
        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);
        setPlayer(player === 'X' ? 'O' : 'X');
        checkWinner();
      }
    };
  
    const renderTiles = () => {
      return board.map((value, index) => (
        <div
          key={index}
          className={`tile ${value}`}
          onClick={() => handleTileClick(index)}
        >
          {value}
        </div>
      ));
    };
  
    const handleGameEnd = () => {
      if (winner === 'X') {
        setPlayer1(prev => ({ ...prev, wins: prev.wins + 1 }));
      } else if (winner === 'O') {
        setPlayer2(prev => ({ ...prev, wins: prev.wins + 1 }));
      }
      // Reset the game state here if needed
    };

  return (
    <main className="background">
      <section className="title">
        <h1>Tic Tac Toe</h1>
      </section>
      <section className="display">
        {winner ? `Winner: ${winner}` : `Player ${player}'s turn`}
      </section>
      <section className="container">
      {renderTiles()}
      </section>
      <section className={`display announcer ${winner ? '' : 'hide'}`}>
        {winner === 'draw' ? 'It\'s a draw!' : 'Congratulations!'}
      </section>
      <section className="controls">
        <button id="reset" onClick={() => { window.location.reload(); handleGameEnd(); }}>Reset</button>
      </section>
      <Link to="/">
          <button onClick={handleGameEnd} className='results'>Show Results</button>
        </Link>
    </main>
  );
}

export default TicTacToeGame;
