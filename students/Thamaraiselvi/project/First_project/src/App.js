
import './App.css';
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" onChange={(e) => setNum2(e.target.value)} />
      <h1>
        Addition:-{Number(num1) + Number(num2)}
        <br />
        Substraction:-{Number(num1) - Number(num2)}
        <br />
        Division:-{Number(num1) / Number(num2)}
        <br />
        Multiplication:-{Number(num1) * Number(num2)}
      </h1>
    </div>
  );
}

export default App;
