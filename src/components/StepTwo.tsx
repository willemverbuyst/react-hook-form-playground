import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateStepTwo } from "../actions";
import Button from "./Button";

type FormValues = {
  email: string;
  phoneNumberCheckbox: boolean;
  phoneNumber: string;
};

function StepTwo() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<FormValues>();
  const { actions } = useStateMachine({ updateStepTwo });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    actions.updateStepTwo(data);
    navigate("/result");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col py-4">
        <label htmlFor="email" className="py-1">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="flex py-4 gap-2">
        <input
          {...register("phoneNumberCheckbox")}
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
          {...register("phoneNumber")}
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
