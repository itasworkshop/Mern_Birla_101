import React from "react";
import { useState } from "react";

export const Currency = (props) => {
  const [out, setOut] = useState(0);

  const update = (e) => {
    if (e.target.value === "usd") {
      setOut(Number(props.inputValue * props.usd));
    } else if (e.target.value === "ind") {
      setOut(Number(props.inputValue * props.indian));
    } else if (e.target.value === "euro") {
      setOut(props.inputValue * props.euro);
    } else if (e.target.value === "yuan") {
      setOut(props.inputValue * props.yuan);
    }
  };

  return (
    <div>
      <input type="number" value={out} />
      <select onChange={update}>
        <option value=" ">Select Country</option>
        <option value="ind">Indian </option>
        <option value="usd">USD</option>
        <option value="euro">EURO</option>
        <option value="yuan">YUAN</option>
      </select>
    </div>
  );
};
