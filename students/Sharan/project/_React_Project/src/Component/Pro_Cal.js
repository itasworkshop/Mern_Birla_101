import React, { useState } from "react";
function MathCal() {
  const initialVar = 0;
  const [Var, setVar] = useState(initialVar);
  const AdditionBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setVar((prevVar) => prevVar + 1);
    }
  };
  return (
    <div>
      <h3>
        {" "}
        Value: {Var} <br />
      </h3>
      <button onClick={() => setVar((prevVar) => prevVar + 2)}>Addition</button>
      <button onClick={() => setVar((prevVar) => prevVar - 2)}>
        Subtraction
      </button>
      <button onClick={() => setVar((prevVar) => prevVar * 2)}>Multiply</button>
      <button onClick={() => setVar((prevVar) => prevVar * 2)}>Multiply</button>
      <button onClick={() => setVar(initialVar)}>Reset</button>
    </div>
  );
}
export default MathCal;
