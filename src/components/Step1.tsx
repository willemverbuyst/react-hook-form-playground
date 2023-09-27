import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepOne } from "../actions";
import BackButton from "./BackButton";
import Button from "./Button";
import FormField from "./FormField";

const stepOneFormValues = z.object({
  firstName: z.string().min(1, { message: "first name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
});

type StepOneFormValues = z.infer<typeof stepOneFormValues>;

function Step1() {
  const { actions, state } = useStateMachine({ updateStepOne });
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<StepOneFormValues>({
    resolver: zodResolver(stepOneFormValues),
    defaultValues: {
      firstName: state.data.firstName,
      lastName: state.data.lastName,
    },
  });

  const onSubmit = (data: StepOneFormValues) => {
    actions.updateStepOne(data);
    navigate("/step2");
  };

  return (
    <section>
      <h2 className="text-4xl text-center py-4">Step 1</h2>
      <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="First Name"
          error={errors.firstName}
          formRegister={register("firstName")}
        />
        <FormField
          label="Last Name"
          error={errors.lastName}
          formRegister={register("lastName")}
        />
        <section className="py-4 flex justify-end gap-2">
          <BackButton />
          <Button caption="Next" type="submit" />
        </section>
      </form>
    </section>
  );
}

export default Step1;
