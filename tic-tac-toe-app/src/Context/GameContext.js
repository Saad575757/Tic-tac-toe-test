import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [player1, setPlayer1] = useState({ name: '', wins: 0 });
  const [player2, setPlayer2] = useState({ name: '', wins: 0 });

  return (
    <GameContext.Provider value={{ player1, setPlayer1, player2, setPlayer2 }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
