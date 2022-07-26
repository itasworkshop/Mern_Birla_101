import React from "react";
import { useState } from "react";

export const Toggle = (props) => {
  const [img, setImg] = useState(true);
  const handleToggle = () => setImg(!img);

  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={handleToggle}>button</button>
      <br />
      {img && <img src={props.img1} alt="" width={300} />}
      {!img && <img src={props.img2} alt="" width={300} />}
    </div>
  );
};
