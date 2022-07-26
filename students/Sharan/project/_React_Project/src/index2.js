import React from "react";
import ReactDOM from "react-dom";

var cmark = 50;
var pmark = 90;
var mmark = 20;
var name = "Raj";
var tot = cmark + mmark + pmark;
var avg = (tot / 300) * 100;
var grade;
if (avg <= 100 && avg >= 90) {
  grade = "grade A";
} else if (avg <= 89 && avg >= 80) {
  grade = "grade B";
} else if (avg <= 79 && avg >= 55) {
  grade = "grade C";
} else {
  grade = "Fail";
}
function PMark(props) {
  return (
    <h1>
      <div>Name : {props.name}</div>
      <div>PMark : {props.mark1}</div>
      <div>CMark : {props.mark2}</div>
      <div>MMark : {props.mark3}</div>
      <div>Total : {tot}</div>
      <div>Avg : {(tot / 300) * 100}</div>
      <div>Grade of Student {grade}</div>
    </h1>
  );
}

ReactDOM.render(
  <PMark mark1={pmark} mark2={cmark} mark3={mmark} name={name} />,
  document.getElementById("root")
);
