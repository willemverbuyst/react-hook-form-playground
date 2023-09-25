import { useStateMachine } from "little-state-machine";

function Result() {
  const { state } = useStateMachine();
  return (
    <section>
      <h2>Result</h2>
      {JSON.stringify(state)}
    </section>
  );
}

export default Result;
