import logo from './logo.svg';
import './App.css';
import Calculator from './component/Calculator';
import Gradecal from './component/Grade_cal';
import MarksCal from './component/MarksCal';

function App() {
  return (
    <div className="App">
     <Calculator/>
     <Gradecal/>
     <br/>
     <MarksCal/>
    </div>
  );
}

export default App;
