import './App.css';
import React,{useState} from 'react';
import GradeCalculation from "./Grade/GradeCalculation";

function App() {
  const [users, setusers] = useState([])
  const [state, setState] = useState({
    name:'',
    number1: '',
    number2:'',
    number3:'',
    Grade:''
  });

  
  const calculateGrade = () => {
   let avg = (parseInt(state.number1) + parseInt(state.number2) + parseInt(state.number3))/3;
    if(avg >=90 && avg <= 100){
      setState({...state, Grade : "A"});
    }else if(avg>=80 && avg<90){
      setState({...state, Grade : "B"});
    }else if(avg>=70 && avg<80){
      setState({...state, Grade : "C"});
    }else {
      setState({...state, Grade : "U"});
    }
  }

  const addStudent = () => {
    setusers([...users, state]);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <tr>
        <input type="text" placeholder='Name' value={state.name} onChange={(e) => {setState({...state,name: e.target.value})}}  />
        <input type="text" placeholder='Chemistry Mark' value={state.number1} onChange={(e) => {setState({...state, number1: e.target.value})}}  />
        <input type="text" placeholder='Physics Mark' value={state.number2} onChange={(e) => {setState({...state, number2: e.target.value})}}  />
        <input type="text" placeholder='Maths Mark' value={state.number3} onChange={(e) => {setState({...state, number3: e.target.value})}}  />
        </tr>
        <div style={{ m:"20px"}}>
        <button onClick={calculateGrade} style={{ p:"20px", width:"300px", backgroundColor:"Yellow"}} >Grade</button>
        <button onClick={addStudent} style={{ p:"20px", width:"300px", backgroundColor:"Yellow"}} >Add Student</button>
        </div>

     <GradeCalculation  name={state.name} cmark={state.number1} pmark={state.number2} mmark={state.number3} grade={state.Grade} student={users} />
      </header>
    </div>
  );
}

export default App;
