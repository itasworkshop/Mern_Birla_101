import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export const CurrencyConverter = (props) => {
  const [res, setRes] = useState(0);
  const [res1, setRes1] = useState(0);

  const handleCurrency = () => {
    setRes(props.curr1 * 79.75);
  };
  const handleCurrency1 = () => {
    setRes1(props.curr2 / 79.75);
  };
  return (
    <div>
      <h1>Dollor And Indian Currency Converter</h1>

      <br />
      <button onClick={handleCurrency}>USD Currency</button>
      <button onClick={handleCurrency1}>Indian Currency</button>
      <br />
      <h3>{res} RS</h3>
      <h3>{res1} $</h3>
    </div>
  );
};

ReactDOM.render(
  <CurrencyConverter curr1="5" curr2="200" />,
  document.getElementById("root")
);
