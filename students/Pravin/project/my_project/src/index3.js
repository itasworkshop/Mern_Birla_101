import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export const Marks = (props) => {
  const data = {
    name: props.name,
    cmarks: props.cmarks,
    pmarks: props.pmarks,
    mmarks: props.mmarks,
  };

  const student1 = [data];

  return (
    <div>
      <h1>All Grades</h1>

      <div>
        {student1.map((item) => {
          return (
            <div>
              <h4>Name:-{item.name}</h4>
              <h4>CMArks:-{item.cmarks}</h4>
              <h4>Pmarks:-{item.pmarks}</h4>
              <h4>MMarks:-{item.mmarks}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(
  <Marks name="pravin" cmarks="87" pmarks="85" mmarks="90" />,
  document.getElementById("root")
);
