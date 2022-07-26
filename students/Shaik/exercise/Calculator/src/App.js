import './App.css';
// import Calculator from './component/Calculator';
// import Gradecal from './component/Grade_cal';
// import MarksCal from './component/MarksCal';
import Toggle from './component/Toggle';
import PassInput from './component/PassInput';

function App() {
  return (
    <div className="App">
     {/* <Calculator/> */}
     {/* <Gradecal/> */}
     <br/>
     {/* <MarksCal/> */}
     {/* <SayHello/> */}
     <Toggle img1="./Images/D1.jpg" img2="./Images/D2.jpg" />
     <PassInput  username="Ahad" password="123"/>
     {/* <PassInput  password="123"/> */}
    </div>
  );
}

export default App;
