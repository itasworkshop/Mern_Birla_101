import React from "react";

export const Currency = (props) => {
  const { CurrencyData } = props;

  return (
    <div>
      <input type="number" />
      <select>
        {CurrencyData.map((item) => {
          <option key={item} value={item}>
            {item}
          </option>;
          console.log(item);
        })}
      </select>
    </div>
  );
};
