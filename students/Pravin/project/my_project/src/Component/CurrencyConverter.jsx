import React from "react";
import { useState } from "react";

export const CurrencyConverter = (props) => {
  //   const [curr1, setCurr1] = useState(0);
  //   const [curr2, setCurr2] = useState(0);
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
      {/* 
      <input
        type="text"
        onChange={(e) => setCurr1(e.target.value)}
        placeholder="USD Converter"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setCurr2(e.target.value)}
        placeholder="Indian Converter"
      /> */}
      <br />
      <button onClick={handleCurrency}>USD Currency</button>
      <button onClick={handleCurrency1}>Indian Currency</button>
      <br />
      <h3>{res} RS</h3>
      <h3>{res1} $</h3>
    </div>
  );
};
