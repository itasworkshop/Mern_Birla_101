import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const students = [
    {id:101,name:"raj",cmarks:45,pmarks:55,mmarks:67},
      {id:102,name:"rajesh",cmarks:65,pmarks:85,mmarks:77},
      {id:103,name:"suraj",cmarks:43,pmarks:55,mmarks:60},
      {id:104,name:"tom",cmarks:71,pmarks:65,mmarks:70}
      ];

function App(props){
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3> Student Grade Calculator </h3>
        </div>
        <div>
          <table cellSpacing={10}>
            <thead>
              <tr>
              <td>Student Name</td>
              <td>Student Id</td>
              <td>Chem mark</td>
              <td>Physic mark</td>
              <td>Maths mark</td>
              <td>Grade</td>
              </tr>
              
              </thead>
            <tbody>
              
              {students.map((std) => {
                return (
                  <tr>
                   <td >
                    {std.name}
                   </td>
                   <td >
                    {std.id}
                   </td>
                   <td >
                    {std.cmarks}
                   </td>
                   <td >
                    {std.pmarks}
                   </td>
                   <td >
                    {std.mmarks}
                   </td>
                   </tr>
                  );
              })}
    
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

ReactDOM.render(
  <App mark1={students.cmarks} mark2={students.pmarks}  mark3={students.mmarks} />, document.getElementById('root')
);