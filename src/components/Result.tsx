import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Result() {
  const navigate = useNavigate();
  const { state } = useStateMachine();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <h2 className="text-4xl text-centers">Result</h2>
      <section className="py-3">
        {Object.entries(state.data || {}).map(([key, value], i) => (
          <p key={i}>
            {key}: {typeof value === "boolean" ? JSON.stringify(value) : value}
          </p>
        ))}
      </section>
      <section className="py-4 flex justify-end gap-2">
        <Button caption="back" handleClick={handleGoBack} />
      </section>
    </section>
  );
}

export default Result;
