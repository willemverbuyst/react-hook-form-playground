function StepOne() {
  return (
    <form className="w-48">
      <section className="flex flex-col py-4">
        <label htmlFor="first-name" className="py-1">
          First Name
        </label>
        <input
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
          id="last-name"
          type="text"
          className="bg-slate-100 rounded px-2 py-1 outline-none text-slate-800"
        />
      </section>
      <section className="py-4 text-right">
        <button className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
          Next
        </button>
      </section>
    </form>
  );
}

export default StepOne;
