import Game from "./Game";
import { useGame } from "./GameContext";
import Welcome from "./Welcome";

export default function App() {
  const { isPlaying } = useGame();

  if (isPlaying) return <Game />;
  return <Welcome />;
}
