import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


export default function Grade(props) {
 
  const [show, setShow] = useState("");

  const grade = () => {
    if (props.num1 > 90) {
        setShow("Grade A");
    } else if (props.num1 > 80 && props.num1 <= 90) {
        setShow("Grade B");
    } else if (props.num1 > 70 && props.num1 <= 80) {
        setShow("Grade C");
    } else if (props.num1 <= 70) {
        setShow("Failed");
    }
  };

  return (
    <div>
      <h1>Grade</h1>
      <button onClick={() => grade()}>Submit</button>
      <h3> Grade is {show}
      </h3>
    </div>
  );
}

ReactDOM.render(<Grade num1="90" />, document.getElementById("root"));