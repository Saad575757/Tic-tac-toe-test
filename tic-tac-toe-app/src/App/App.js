import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { GameProvider } from '../Context/GameContext';
import './App.css';
import Home from '../Pages/Home/Home';
import GameSession from '../Pages/InputGame/GameSession';
import GamePlay from '../Pages/Game/GamePlay';


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
            <Route path="/" element={<Home />} />
            <Route path="/new-game" element={<GameSession />} />
            <Route path="/gameplay" element={<GamePlay />} />
          </Routes>
        </GameProvider>
      </div>
    </Router>
  );
}

export default App;
