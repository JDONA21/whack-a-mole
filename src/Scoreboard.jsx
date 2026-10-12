import { useGame } from "./GameContext";

export default function Scoreboard() {
  const { score, restartGame } = useGame();
  return (
    <section>
      <p>{score}</p>
      <button onClick={restartGame}>Restart</button>
    </section>
  );
}
