import Field from "./Field";
import Scoreboard from "./Scoreboard";

export default function Game() {
  return (
    <article>
      <h1>Whack a Mole</h1>
      <Scoreboard />
      <Field />
    </article>
  );
}
