import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepFour } from "../actions";
import { POSITION, SKILLS } from "../constants";
import Button from "./Button";
import FormFieldRadioGroup from "./FormFieldRadioGroup";
import FormFieldSelect from "./FormFieldSelect";

const stepFourFormValues = z.object({
  position: z.enum(POSITION),
  skills: z.enum(SKILLS),
});

type StepFourFormValues = z.infer<typeof stepFourFormValues>;

function Step4() {
  const { actions, state } = useStateMachine({ updateStepFour });
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<StepFourFormValues>({
    resolver: zodResolver(stepFourFormValues),
    defaultValues: {
      position: state.data.position,
      skills: state.data.skills,
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
        <FormFieldRadioGroup
          legend="Position?"
          formRegister={register("position")}
          values={[...POSITION]}
        />
        <FormFieldSelect
          label="Skills"
          formRegister={register("skills")}
          values={[...SKILLS]}
        />
        <section className="py-4 flex justify-end gap-2">
          <Button caption="Back" handleClick={handleGoBack} />
          <Button caption="Next" type="submit" />
        </section>
      </form>
    </section>
  );
}

export default Step4;
