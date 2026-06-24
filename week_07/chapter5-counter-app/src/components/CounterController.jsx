import { useState } from "react";

const CounterController = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState([]);

  return (
    <div>
      <div className="counterValue">{count}</div>

      <div className="counterController">
        <button
          onClick={() => {
            setCount(count - step);
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            setCount(count + step);
          }}
        >
          +
        </button>
        <div className="counterStepper">
            <label>변화량</label>
            <input 
                type="number"
                value={step}
                onChange={(e) => {
                    const nextStep = Number(e.target.value);

                    if (nestStep >= 1) {
                        setStep(nextStep);
                    }
                }} 
            />
        </div>
      </div>
    </div>
  );
};

export default CounterController;