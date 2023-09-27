import {
  GlobalState,
  StateMachineProvider,
  createStore,
} from "little-state-machine";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Result from "./components/Result";
import Start from "./components/Start";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function log(store: GlobalState) {
  console.table(store.data);
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
      files: undefined,
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
              <Route path="/result" element={<Result />} />
            </Routes>
          </Router>
        </div>
      </main>
    </StateMachineProvider>
  );
}

export default App;
