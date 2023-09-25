import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateStepOne } from "../actions";
import Button from "./Button";

type FormValues = {
  firstName: string;
  lastName: string;
};

function StepOne() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<FormValues>();
  const { actions } = useStateMachine({ updateStepOne });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    actions.updateStepOne(data);
    navigate("/step2");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col py-4">
        <label htmlFor="first-name" className="py-1">
          First Name
        </label>
        <input
          {...register("firstName")}
          id="first-name"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="flex flex-col py-4">
        <label htmlFor="last-name" className="py-1">
          First Name
        </label>
        <input
          {...register("lastName")}
          id="last-name"
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

export default StepOne;
