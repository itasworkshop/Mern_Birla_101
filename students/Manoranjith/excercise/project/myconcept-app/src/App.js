
import { useState } from 'react';
import Numbers from './Components/Numbers';

function App() {
  const [num, setNum] = useState({
    number1: '',
    number2:''
  });

  return (
    <div >
      <h1>
        Calculator
      </h1>
      <div>
      <input type="text" value={num.number1} onChange={(e) => {setNum({...num, number1:e.target.value})}} />
      <input type="text" value={num.number2} onChange={(e) => {setNum({...num, number2:e.target.value})}} />
      </div><br />

      <Numbers number1={num.number1} number2= {num.number2}  />
    </div>
  );
}

export default App;
