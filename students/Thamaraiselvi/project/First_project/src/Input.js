import React, { useState } from "react";


const Input = (props) => {
  const [value, setValue] = useState(0);

  const addNum = (val, val2) => {
    let a = parseInt(val);
    let b = parseInt(val2);
    setValue(a + b);
  };

  return (
    <div className="App">
      <button onClick={() => addNum(props.values, props.values2)}>
        Result
      </button>
      <p>{value > 0 ? value : ""}</p>
    </div>
  );
};

export default Input;
