import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

ReactDOM.render(
  <Toggle
    img1="https://www.collinsdictionary.com/images/full/horse_84139573.jpg"
    img2="https://media.istockphoto.com/photos/brown-sharp-horse-galloping-picture-id95369557?k=20&m=95369557&s=612x612&w=0&h=QNj5kBK2IE6fYTzLDChmOyvz43UZpIPvIDWLmz0ACV4="
  />,
  document.getElementById("root")
);
