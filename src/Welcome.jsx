import { useGame } from "./GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <article>
      <h1>Whack a Mole</h1>
      <p>Instructions</p>
      <button onClick={startGame}>Start game</button>
    </article>
  );
}
