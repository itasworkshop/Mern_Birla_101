import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var pmark = 80;
var cmark =90;
var mmark=70
var name = "Thamarai";
var tot = pmark + cmark + mmark
var avg = (tot/ 300) * 100
var grade;
if(avg <= 100 && avg >=90){
  grade = "grade A"
}
else if(avg <= 89 && avg >=80){
  grade = "grade B"
}
else if(avg <= 79 && avg >=55){
  grade= "grade C"
}
else{
  grade = "Failed"
}
function App(props){
  return <h1>
    <div>
      Name : {props.name}
    </div>
    <div>
    Physics Mark : {props.mark1}
    </div>
    <div>
    Chemistry Mark : {props.mark2}
    </div>
    <div>
    Maths Mark : {props.mark3}
    </div>
   
    <div>
    Total : {tot}
    </div>
    <div>
    Avg : {(tot/ 300) * 100}
    </div>
    <div>
      Grade of Student {grade}
    </div>
    </h1>
  
}


  ReactDOM.render(
    <App name={name} mark1={pmark} mark2={cmark}  mark3={mmark} />, document.getElementById('root')
    );



