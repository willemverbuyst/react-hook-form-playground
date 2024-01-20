import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { NAVIGATION_MULTI } from "../constants";

function Start() {
  const navigate = useNavigate();

  const goToMultiStepForm = () => {
    navigate(NAVIGATION_MULTI["/multi/"]);
  };

  return (
    <section className="w-66 flex flex-col py-4">
      <Button caption="Multi Step Form" handleClick={goToMultiStepForm} />
    </section>
  );
}

export default Start;
