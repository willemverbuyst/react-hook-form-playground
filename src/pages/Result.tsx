import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Result() {
  const navigate = useNavigate();
  const { state } = useStateMachine();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToStart = () => {
    navigate("/");
  };

  return (
    <section>
      <h2 className="text-4xl text-centers">Result</h2>
      <section className="py-3">
        {Object.entries(state.data || {}).map(([key, value], i) => (
          <p key={i}>
            {key}: {JSON.stringify(value)}
          </p>
        ))}
      </section>
      <section className="py-4 flex justify-end gap-2">
        <Button caption="back" handleClick={handleGoBack} />
        <Button caption="done" handleClick={handleGoToStart} />
      </section>
    </section>
  );
}

export default Result;
