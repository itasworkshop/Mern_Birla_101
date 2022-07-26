// import React from "react";
// class Button extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { msg: "hello shiva" };
//         this.handleClick = this.handleClick.bind(this); // bind the data 
//     }
//     handleClick() {
//         this.setState({ msg: "hello" });
//     }

//     render() {

//         return (
//             <>
//                 <div>
//                     <h2>Message is:{this.state.msg}</h2>
//                     <button onClick={this.handleClick}>click</button>
//                 </div>
//             </>
//         )
//     }

// }
// export default Button;

import React, { useState } from "react";
const Button = () =>{
    const msg ="hello";
    const[bg,setBg] = useState(msg)
   const bgchange =() =>{
  
   let newmsg ="shiva";
   setBg(newmsg)
    console.log('click');
   }
    return(
        <>
     <div>
     <h1>{bg}</h1>
        <button onClick={bgchange}>click</button>
     </div>
        </>
    )
}
export default Button;