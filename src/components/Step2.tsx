import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepTwo } from "../actions";
import BackButton from "./BackButton";
import Button from "./Button";
import FormField from "./FormField";
import FormFieldCheckbox from "./FormFieldCheckbox";

const stepTwoFormValues = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("this is not a valid email."),
  hasPhoneNumber: z.boolean(),
  phoneNumber: z.string(),
});

type StepTwoFormValues = z.infer<typeof stepTwoFormValues>;

function Step2() {
  const { actions, state } = useStateMachine({ updateStepTwo });
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<StepTwoFormValues>({
    resolver: zodResolver(stepTwoFormValues),
    defaultValues: {
      email: state.data.email,
      hasPhoneNumber: state.data.hasPhoneNumber,
      phoneNumber: state.data.phoneNumber,
    },
  });

  const onSubmit = (data: StepTwoFormValues) => {
    actions.updateStepTwo(data);
    navigate("/step3");
  };

  const hasPhone = watch("hasPhoneNumber");

  return (
    <section>
      <h2 className="text-4xl text-center py-4">Step 2</h2>
      <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Email"
          error={errors.email}
          formRegister={register("email")}
        />
        <FormFieldCheckbox
          label="Phone Number?"
          formRegister={register("hasPhoneNumber")}
        />
        {hasPhone && (
          <FormField
            label="Phone Number"
            error={errors.phoneNumber}
            formRegister={register("phoneNumber")}
          />
        )}
        <section className="py-4 flex justify-end gap-2">
          <BackButton />
          <Button caption="Next" type="submit" />
        </section>
      </form>
    </section>
  );
}

export default Step2;
