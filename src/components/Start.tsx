import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Start() {
  const navigate = useNavigate();

  const startForm = () => {
    navigate("/step1");
  };

  return (
    <section>
      <Button caption="Start" handleClick={startForm} />
    </section>
  );
}

export default Start;
