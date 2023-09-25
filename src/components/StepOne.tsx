import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepOne } from "../actions";
import Button from "./Button";

const stepOneFormValues = z.object({
  firstName: z.string().min(1, { message: "first name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
});

type StepOneFormvalues = z.infer<typeof stepOneFormValues>;

function StepOne() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<StepOneFormvalues>({ resolver: zodResolver(stepOneFormValues) });
  const { actions } = useStateMachine({ updateStepOne });

  const onSubmit = (data: StepOneFormvalues) => {
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
          id="first-name"
          {...register("firstName")}
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
        {errors.firstName && (
          <p role="alert" className="text-red-400 py-1">
            {errors.firstName.message}
          </p>
        )}
      </section>
      <section className="flex flex-col py-4">
        <label htmlFor="last-name" className="py-1">
          Last Name
        </label>
        <input
          id="last-name"
          {...register("lastName")}
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
        {errors.lastName && (
          <p role="alert" className="text-red-400 py-1">
            {errors.lastName.message}
          </p>
        )}
      </section>
      <section className="py-4 flex justify-end gap-2">
        <Button caption="Back" handleClick={handleGoBack} />
        <Button caption="Next" type="submit" />
      </section>
    </form>
  );
}

export default StepOne;
