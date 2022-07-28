import logo from './logo.svg';
import './App.css';
// import Calc from './components/calc';
// import Grade from './components/grade';
// import Percentage from './components/Percentage';
// import { Calculator } from './calc1';

import { Marks } from './index1';
import Toggle from './toggleImage';
import { Currency } from './Converter';
import { Login } from './Login';
import Login1 from './Login1';
import Calculator from './sirCalc';
import MyCalculator from './components/CurrencyCalc';








function App() {
// const marks={
  //   name:"praveen", 
  //   sub1:"75" ,
  //   sub2:"72",
  //    sub3:"87"}
  return (
    <div className="App">
    {/* <Calc/>
     <Grade/>
     <Percentage/>

     <Calculator num1="10" num2="20"/> 
     {/* <Marks {...marks}/> */}
 {/* <Toggle/>  

 <Login  pwd="9035" users="praveen"/>

<Login1/> 

 <Currency/>  */}
<Calculator/>
<MyCalculator/>

   
    </div>
  );
}

export default App;
