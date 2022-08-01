import React from "react";
import { useState } from "react";
// import Grade from "./Grade";

export const Marks = () => {
  const [grade, setGrade] = useState({});
  const [student1, setStudent1] = useState([]);
  const [msg, setMsg] = useState("");
  

  const Total =
    Number(grade.Cmarks) + Number(grade.Pmarks) + Number(grade.Mmarks);
  console.log(Total);

  const Totalper = Total / 3;

  const addGrade = () => {
    setStudent1([...student1, grade]);
    if (Totalper > 90) {
      setMsg(" A");
    } else if (Totalper > 80 && Totalper <= 90) {
      setMsg(" B");
    } else if (Totalper > 70 && Totalper <= 80) {
      setMsg(" C");
    } else if (Totalper <= 70) {
      setMsg(" FAIL");
    }
  };

  //   const data = student1;
  // console.log(grade);
  // console.log(data);

  return (
    <div>
      ;<h1>All Grades</h1>
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
              <h4>CMarks:-{item.Cmarks}</h4>
              <h4>PMarks:-{item.Pmarks}</h4>
              <h4>MMarks:-{item.Mmarks}</h4>
              <h4>
                Total Marks:-
                {Number(item.Mmarks) +
                  Number(item.Cmarks) +
                  Number(item.Pmarks)}
              </h4>
              <h4>
                Percentage:-
                {(Number(item.Mmarks) +
                  Number(item.Cmarks) +
                  Number(item.Pmarks)) /
                  3}
              </h4>
            </div>
          );
        })}
      </div>
      <h3>
        Marks are {Total} with Percentage {Totalper}% and Grade is {msg}
      </h3>
      {/* <Grade
        Cmarks={grade.Cmarks}
        Pmarks={grade.Pmarks}
        Mmarks={grade.Mmarks}
      /> */}
    </div>
  );
};
