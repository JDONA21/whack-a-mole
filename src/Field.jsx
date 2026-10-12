import { useGame } from "./GameContext";
import Hole from "./Hole";
import Mole from "./Mole";

export default function Field() {
  const { field } = useGame();

  return (
    <ul className="field">
      {field.map((isMole, i) => (isMole ? <Mole key={i} /> : <Hole key={i} />))}
    </ul>
  );
}
