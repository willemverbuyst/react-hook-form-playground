import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateFirstAndLastName } from "../actions";

type FormValues = {
  firstName: string;
  lastName: string;
};

function StepOne() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<FormValues>();
  const { actions } = useStateMachine({ updateFirstAndLastName });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    actions.updateFirstAndLastName(data);
    navigate("/step2");
  };

  const goBack = () => {
    navigate("/");
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
        <button
          onClick={() => goBack()}
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Back
        </button>
        <button
          type="submit"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Next
        </button>
        {/* <Link
          to="/"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Back
        </Link>
        <Link
          to="/step2"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Next
        </Link> */}
      </section>
    </form>
  );
}

export default StepOne;
