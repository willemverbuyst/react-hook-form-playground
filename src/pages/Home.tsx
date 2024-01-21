import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { MULTI, ROUTES } from "../constants";

function Start() {
  const navigate = useNavigate();

  const goToMultiStepForm = () => {
    navigate(`/${ROUTES.MULTI}/${MULTI.START}`);
  };

  return (
    <section className="w-66 flex flex-col py-4">
      <Button caption="Multi Step Form" handleClick={goToMultiStepForm} />
    </section>
  );
}

export default Start;
