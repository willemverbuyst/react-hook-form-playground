import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepFour } from "../actions";
import Button from "./Button";

const stepFourFormValues = z.object({
  position: z.enum(["front-end", "back-end", "full-stack"]),
});

type StepFourFormValues = z.infer<typeof stepFourFormValues>;

function Step4() {
  const { actions, state } = useStateMachine({ updateStepFour });
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<StepFourFormValues>({
    resolver: zodResolver(stepFourFormValues),
    defaultValues: {
      position: state.data.position,
    },
  });

  const onSubmit = (data: StepFourFormValues) => {
    actions.updateStepFour(data);
    navigate("/result");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <h2 className="text-4xl text-center py-4">Step 4</h2>
      <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex flex-col py-4">
          <p className="text-2xl py-1">Position?</p>
          <section className="py-1">
            <input
              {...register("position")}
              type="radio"
              value="front-end"
              className="bg-slate-100 rounded outline-none"
            />
            <label className="px-1">Front-end</label>
          </section>
          <section className="py-1">
            <input
              {...register("position")}
              type="radio"
              value="back-end"
              className="bg-slate-100 rounded outline-none"
            />
            <label className="px-1">Back-end</label>
          </section>
          <section className="py-1">
            <input
              {...register("position")}
              type="radio"
              value="full-stack"
              className="bg-slate-100 rounded outline-none"
            />
            <label className="px-1">Full stack</label>
          </section>
        </section>

        <section className="py-4 flex justify-end gap-2">
          <Button caption="Back" handleClick={handleGoBack} />
          <Button caption="Next" type="submit" />
        </section>
      </form>
    </section>
  );
}

export default Step4;
