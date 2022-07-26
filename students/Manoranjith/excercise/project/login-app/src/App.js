import Img1 from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  const handler = () => {
    setToggle(!toggle);
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={toggle ? Img1 : Img2} alt="Img" onClick={handler} />
         
      </header>
    </div>
  );
}

export default App;
