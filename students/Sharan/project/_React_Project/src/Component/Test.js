import React from "react";
import { useState } from "react";
const Test = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const henadlClick = (e) => {
    setValue1(e.target.value);
    setValue2(e.target.value);
  };

  return (
    <div>
      <h1>Calculation</h1>
      <input onChange={henadlClick} />
      <input onChange={henadlClick} />

      <p>Addition {Number(value1) + Number(value2)}</p>
      <p>Substraction {value1 - value2}</p>
      <p>Multiplication {value1 * value2}</p>
      <p>Division {value1 / value2}</p>
    </div>
  );
};

export default Test;
