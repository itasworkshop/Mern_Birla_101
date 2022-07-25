import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//React DOM apply changes only where it requires.

function tick() {
  const elements = (
    <div>
      <h1>This is demo for Clock Tick.</h1>
      <h2>This is {new Date().toString()}</h2>
    </div>
  );

  ReactDOM.render(elements, document.getElementById("root"));
}

setInterval(() => {
  tick();
}, 1000);
