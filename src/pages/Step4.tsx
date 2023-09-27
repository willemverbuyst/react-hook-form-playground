import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import FormFieldRadioGroup from "../components/FormFieldRadioGroup";
import FormFieldSelect from "../components/FormFieldSelect";
import { POSITION, SKILLS } from "../constants";
import { updateStepFour } from "../state/actions";

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
          <BackButton />
          <Button caption="Next" type="submit" />
        </section>
      </form>
    </section>
  );
}

export default Step4;
