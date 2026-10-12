import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const GameContext = createContext();

function makeField() {
  const field = [];
  for (let i = 0; i < 9; i++) {
    field.push(false);
  }

  const mole = Math.floor(Math.random() * field.length);
  field[mole] = true;

  return field;
}

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);

  const startGame = () => {
    setIsPlaying(true);
  };
  const restartGame = () => {
    setIsPlaying(false);
    setScore(0);
  };
  const moveMole = () => {
    setScore(score + 1);
    setField(makeField());
  };

  const value = {
    isPlaying,
    startGame,
    score,
    restartGame,
    field,
    moveMole,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used inside GameProvider.");
  return context;
}
