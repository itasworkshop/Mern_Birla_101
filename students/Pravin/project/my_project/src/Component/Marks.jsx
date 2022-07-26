import React from "react";
import { useState } from "react";

export const Marks = () => {
  const [grade, setGrade] = useState({});
  const [student1, setStudent1] = useState([]);

  const addGrade = () => {
    setStudent1([...student1, grade]);
  };

  //   const data = student1;
  console.log(grade);
  //   console.log(data);

  return (
    <div>
      <h1>All Grades</h1>
      <input
        type="text"
        onChange={(e) => setGrade({ ...grade, name: e.target.value })}
      />
      <input
        type="number"
        onChange={(e) => setGrade({ ...grade, Cmarks: e.target.value })}
      />
      <input
        type="number"
        onChange={(e) => setGrade({ ...grade, Pmarks: e.target.value })}
      />
      <input
        type="number"
        onChange={(e) => setGrade({ ...grade, Mmarks: e.target.value })}
      />

      <button onClick={() => addGrade()}>Grade</button>

      <div>
        {student1.map((item) => {
          return (
            <div>
              <h4>Name:-{item.name}</h4>
              <h4>CMArks:-{item.Cmarks}</h4>
              <h4>Pmarks:-{item.Pmarks}</h4>
              <h4>MMarks:-{item.Mmarks}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
