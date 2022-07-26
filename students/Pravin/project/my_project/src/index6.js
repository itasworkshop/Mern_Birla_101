import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Login(item) {
  const [password, setPassword] = useState(0);
  const [msg, setMsg] = useState("");
  const handleClick = () => {
    let data = item.pass;
    if (data === password) {
      setMsg("Logged IN Successfully");
    } else {
      setMsg("Logged IN UnSuccessfully");
    }
  };
  return (
    <div>
      <h1> Login</h1>

      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <h1>{msg}</h1>
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

ReactDOM.render(<Login pass="123" />, document.getElementById("root"));
