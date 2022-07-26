import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

export function Calculator(props) {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);

  return (
    <div>
      <h1>Calculator</h1>

      <h1>Num 1:- {props.num1}</h1>
      <h1>Num 2:- {props.num2}</h1>
      {/* <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" onChange={(e) => setNum2(e.target.value)} /> */}
      <h1>
        Addition:-{Number(props.num1) + Number(props.num2)}
        <br />
        Substraction:-{Number(props.num1) - Number(props.num2)}
        <br />
        Division:-{Number(props.num1) / Number(props.num2)}
        <br />
        Multiplication:-{Number(props.num1) * Number(props.num2)}
      </h1>
    </div>
  );
}
ReactDOM.render(
  <Calculator num1="12" num2="4" />,
  document.getElementById("root")
);
