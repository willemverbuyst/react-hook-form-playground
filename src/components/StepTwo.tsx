import { Link } from "react-router-dom";

function StepTwo() {
  return (
    <form className="w-48">
      <section className="flex flex-col py-4">
        <label htmlFor="email" className="py-1">
          Email
        </label>
        <input
          id="email"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="flex py-4 gap-2">
        <input
          id="phone-number-checkbox"
          type="checkbox"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
        <label htmlFor="phone-number-checkbox" className="py-1">
          Phone Number?
        </label>
      </section>
      <section className="flex flex-col py-4">
        <label htmlFor="phone-number" className="py-1">
          Phone Number
        </label>
        <input
          id="phone-number"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="py-4 flex justify-end gap-2">
        <Link
          to="/"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Back
        </Link>
        <Link
          to="/"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Next
        </Link>
      </section>
    </form>
  );
}

export default StepTwo;
