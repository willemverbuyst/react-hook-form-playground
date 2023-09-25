import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepTwo } from "../actions";
import Button from "./Button";
import FormField from "./FormField";
import FormFieldCheckbox from "./FormFieldCheckbox";

const stepTwoFormValues = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("this is not a valid email."),
  phoneNumberCheckbox: z.boolean(),
  phoneNumber: z.string(),
});

type StepTwoFormvalues = z.infer<typeof stepTwoFormValues>;

function StepTwo() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<StepTwoFormvalues>({
    resolver: zodResolver(stepTwoFormValues),
  });
  const { actions } = useStateMachine({ updateStepTwo });

  const onSubmit = (data: StepTwoFormvalues) => {
    console.log(data);
    actions.updateStepTwo(data);
    navigate("/result");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Email"
        error={errors.email}
        formRegister={register("email")}
      />
      <FormFieldCheckbox
        label="Phone Number?"
        formRegister={register("phoneNumberCheckbox")}
      />
      <FormField
        label="Phone Number"
        error={errors.phoneNumber}
        formRegister={register("phoneNumber")}
      />
      <section className="py-4 flex justify-end gap-2">
        <Button caption="Back" handleClick={handleGoBack} />
        <Button caption="Next" type="submit" />
      </section>
    </form>
  );
}

export default StepTwo;
