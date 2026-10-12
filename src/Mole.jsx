import { useGame } from "./GameContext";
export default function Mole() {
  const { moveMole } = useGame();
  return <li className="mole" onClick={moveMole}></li>;
}
