import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { GameProvider } from './GameContext';
import HomePage from './HomePage';
import NewGameSession from './NewGameSession';
import TicTacToeGame from './TicTacToeGame';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        <GameProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-game" element={<NewGameSession />} />
            <Route path="/gameplay" element={<TicTacToeGame />} />
          </Routes>
        </GameProvider>
      </div>
    </Router>
  );
}

export default App;
