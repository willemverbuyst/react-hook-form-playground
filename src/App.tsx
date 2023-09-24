import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

function App() {
  return (
    <main className="bg-slate-800 text-slate-100 p-4 h-screen flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl py-5">React Form Hook Playground</h1>
        <StepOne />
        <StepTwo />
      </div>
    </main>
  );
}

export default App;
