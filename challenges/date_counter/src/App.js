import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Step />
      <Counter />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}
