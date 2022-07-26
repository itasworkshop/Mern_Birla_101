import React from 'react';


// const students = [
//     {id:101,name:"raj",cmarks:45,pmarks:55,mmarks:67},
//       {id:102,name:"rajesh",cmarks:65,pmarks:85,mmarks:77},
//       {id:103,name:"suraj",cmarks:43,pmarks:55,mmarks:60},
//       {id:104,name:"tom",cmarks:71,pmarks:65,mmarks:70}
//       ];


export default function App(props){
  return ( 
    <div >
      <header >
        <div>
          <h3> Student Grade Calculator </h3>
        </div>
        <div>
            {props.name !== '' &&
          <table cellSpacing={10}  >
            <thead>
              <tr>
              <td>Student Name</td>
              <td>Chem mark</td>
              <td>Physic mark</td>
              <td>Maths mark</td>
              <td>Grade</td>
              </tr>
              
              </thead>
            <tbody>
              
                  <tr>
                   <td >
                    {props.name}
                   </td>
                   <td >
                    {props.cmark}
                   </td>
                   <td >
                    {props.pmark}
                   </td>
                   <td >
                    {props.mmark}
                   </td>
                   <td >
                    {props.grade}
                   </td>
                   </tr>
            </tbody>
          </table>
}
        </div>
        <div>
            {props.student.length > 0 &&
        <table cellSpacing={10} style={{ border:"1.5px solid white"}} >
        <thead>
              <tr>
              <td>Student Name</td>
              <td>Chem mark</td>
              <td>Physic mark</td>
              <td>Maths mark</td>
              <td>Grade</td>
              </tr>
              
              </thead>
           {props.student.map((stu) => (
           
            
            <tbody>
              
                  <tr>
                   <td >
                    {stu.name}
                   </td>
                   <td >
                    {stu.number1}
                   </td>
                   <td >
                    {stu.number2}
                   </td>
                   <td >
                    {stu.number3}
                   </td>
                   <td >
                    {stu.Grade}
                   </td>
                   </tr>
            </tbody>
         
           ))}
            </table>
}
        </div>
      </header>

    </div>
  );
}

