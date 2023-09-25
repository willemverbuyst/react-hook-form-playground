import { useNavigate } from "react-router-dom";
import Button from "./Button";

function StepTwo() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <form className="w-48">
      <section className="flex flex-col py-4">
        <label htmlFor="email" className="py-1">
          Email
        </label>
        <input
          id="email"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="flex py-4 gap-2">
        <input
          id="phone-number-checkbox"
          type="checkbox"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
        <label htmlFor="phone-number-checkbox" className="py-1">
          Phone Number?
        </label>
      </section>
      <section className="flex flex-col py-4">
        <label htmlFor="phone-number" className="py-1">
          Phone Number
        </label>
        <input
          id="phone-number"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="py-4 flex justify-end gap-2">
        <Button caption="Back" handleClick={handleGoBack} />
        <Button caption="Next" type="submit" />
      </section>
    </form>
  );
}

export default StepTwo;
