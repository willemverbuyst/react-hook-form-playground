import {
  GlobalState,
  StateMachineProvider,
  createStore,
} from "little-state-machine";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { POSITION, SKILLS } from "./constants";
import Result from "./pages/Result";
import Start from "./pages/Start";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";

function log(store: GlobalState) {
  console.table(store.data);
  return store;
}

createStore(
  {
    data: {
      firstName: "",
      lastName: "",
      bsn: "",
      dateOfBirth: undefined,
      email: "",
      hasPhoneNumber: false,
      phoneNumber: "",
      files: undefined,
      position: POSITION[0],
      skills: SKILLS[0],
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
              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="/step4" element={<Step4 />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </Router>
        </div>
      </main>
    </StateMachineProvider>
  );
}

export default App;
