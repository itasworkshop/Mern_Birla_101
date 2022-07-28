import React from "react";
import { useState } from "react";
import { Currency } from "./Currency";

export const CurrencyCon = () => {
  const [input, setInput] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const indian = 1;
  const usd = 79.88;
  const euro = 81.05;
  const yuan = 11.82;

  const update1 = (e) => {
    if (e.target.value === "usd") {
      setInputValue(input / usd);
    } else if (e.target.value === "ind") {
      setInputValue(input / indian);
    } else if (e.target.value === "euro") {
      setInputValue(input / euro);
    } else if (e.target.value === "yuan") {
      setInputValue(input / yuan);
    }
  };

  return (
    <div>
      <h1>Currency converter</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select onChange={update1}>
        <option value=" ">Select Currency</option>
        <option value="ind">India</option>
        <option value="usd">USD</option>
        <option value="euro">EURO</option>
        <option value="yuan">YUAN</option>
      </select>

      <Currency
        inputValue={inputValue}
        indian="1"
        usd="79.88"
        euro="81.05"
        yuan="11.82"
      />
    </div>
  );
};
