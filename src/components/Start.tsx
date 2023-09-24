import { Link } from "react-router-dom";

function Start() {
  return (
    <section>
      <Link
        to="/step1"
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Start
      </Link>
    </section>
  );
}

export default Start;
