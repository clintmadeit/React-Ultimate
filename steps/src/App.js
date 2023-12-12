import { useState } from "react";

const messages = [
  "Learn React 😀",
  "Apply for jobs 😄",
  "Invest in your income 😛",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    else {
      alert("You are at step 0. Please click next.");
    }
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
    else {
      alert("You are at the last step. Please click previous.");
    }
  }

  return (
    <div className="step">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
