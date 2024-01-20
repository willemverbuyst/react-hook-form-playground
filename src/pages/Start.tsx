import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Button from "../components/Button";
import { NAVIGATION_MULTI } from "../constants";

function Start() {
  const navigate = useNavigate();

  const startForm = () => {
    navigate(NAVIGATION_MULTI["/multi/step1"]);
  };

  return (
    <>
      <BreadCrumbs />
      <section className="w-66 flex flex-col py-4">
        <Button caption="Start" handleClick={startForm} />
      </section>
    </>
  );
}

export default Start;
