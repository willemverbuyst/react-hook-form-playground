import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { updateStepThree } from "../actions";
import Button from "./Button";
import FormFieldDropzone from "./FormFieldDropzone";

const stepThreeFormValues = z.object({
  files: z.instanceof(FileList),
});

type StepThreeFormValues = z.infer<typeof stepThreeFormValues>;

function Step3() {
  const { actions } = useStateMachine({ updateStepThree });
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<StepThreeFormValues>({
    resolver: zodResolver(stepThreeFormValues),
  });

  const onSubmit = (data: StepThreeFormValues) => {
    actions.updateStepThree(data);
    navigate("/step4");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <h2 className="text-4xl text-center py-4">Step 3</h2>
      <form className="w-48" onSubmit={handleSubmit(onSubmit)}>
        <section className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800">
          <FormFieldDropzone name="files" multiple control={control} />
        </section>
        <section className="py-4 flex justify-end gap-2">
          <Button caption="Back" handleClick={handleGoBack} />
          <Button caption="Next" type="submit" />
        </section>
      </form>
    </section>
  );
}

export default Step3;