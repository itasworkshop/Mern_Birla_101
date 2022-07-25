import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

export default function Grade(props) {
  // const [num1, setNum1] = useState(0);
  const [msg, setMsg] = useState("");

  const grade = () => {
    if (props.num1 > 90) {
      setMsg("Grade A");
    } else if (props.num1 > 80 && props.num1 <= 90) {
      setMsg("Grade B");
    } else if (props.num1 > 70 && props.num1 <= 80) {
      setMsg("Grade C");
    } else if (props.num1 <= 70) {
      setMsg("Grade FAIL");
    }
  };

  return (
    <div>
      <h1>Grade</h1>
      {/* <input type="text" onChange={(e) => setNum1(e.target.value)} /> */}
      <button onClick={() => grade()}>Submit</button>

      <h3>
        Marks are {props.num1} and Grade is {msg}
      </h3>
    </div>
  );
}

ReactDOM.render(<Grade num1="87" />, document.getElementById("root"));
