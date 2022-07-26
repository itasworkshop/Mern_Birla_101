import React from "react";
import { useState } from "react";

export default function Grade() {
  const [num1, setNum1] = useState(0);
  const [msg, setMsg] = useState("");

  const grade = () => {
    if (num1 > 90) {
      setMsg("Grade A");
    } else if (num1 > 80 && num1 <= 90) {
      setMsg("Grade B");
    } else if (num1 > 70 && num1 <= 80) {
      setMsg("Grade C");
    } else if (num1 <= 70) {
      setMsg("Grade FAIL");
    }
  };

  return (
    <div>
      <h1>Grade</h1>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <button onClick={() => grade()}>Submit</button>

      <h3>
        Marks are {num1} and Grade is {msg}
      </h3>
    </div>
  );
}
