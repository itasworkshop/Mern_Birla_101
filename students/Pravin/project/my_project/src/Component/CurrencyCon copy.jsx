import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Currency } from "./Currency";

export const CurrencyCon = () => {
  const [CurrencyData, setCurrencyData] = useState([]);
  //   console.log(CurrencyData);

  const Data = {
    Indian: "1",
    USD: "79.88",
    EURO: "81",
    Yuan: "11.82",
  };

  useEffect(() => {
    setCurrencyData([Data]);
  }, []);

  return (
    <div>
      <h1>Currency converter</h1>
      <Currency CurrencyData={CurrencyData} />
      <br />
      <Currency CurrencyData={CurrencyData} />
    </div>
  );
};
