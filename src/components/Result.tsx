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
    <section className="w-48 flex flex-col py-4">
      <h2 className="text-3xl py-3">Result</h2>
      <section className="py-3">
        {Object.entries(state.data).map(([key, value], i) => (
          <p key={i}>
            {key}: {value}
          </p>
        ))}
      </section>
      <Button caption="back" handleClick={handleGoBack} />
    </section>
  );
}

export default Result;
