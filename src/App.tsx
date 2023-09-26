import {
  GlobalState,
  StateMachineProvider,
  createStore,
} from "little-state-machine";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Result from "./components/Result";
import Start from "./components/Start";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

function log(store: GlobalState) {
  console.table(store);
  return store;
}

createStore(
  {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      hasPhoneNumber: false,
      phoneNumber: "",
    },
  },
  {
    middleWares: [log],
    persist: "none", // use "action" to persit data
  }
);

function App() {
  return (
    <StateMachineProvider>
      <main className="bg-slate-800 text-slate-100 p-4 h-screen flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl py-5">React Form Hook Playground</h1>
          <Router>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/step1" element={<StepOne />} />
              <Route path="/step2" element={<StepTwo />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </Router>
        </div>
      </main>
    </StateMachineProvider>
  );
}

export default App;
