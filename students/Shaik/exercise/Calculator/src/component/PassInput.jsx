// All commented code is done for different different scenario.

import React,{useState} from "react";

function PassInput(props) {


  const [usernamme, setUsernamme] = useState("");
  const [passworrd, setPassworrd] = useState(0);
  const [alert, setAlert] = useState("");
//   const [data,setData]=useState(" ")
//   const database = [
//     {
//       username: "Ahad",
//       password: "123",
//     }];
    const myStyle={
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily:"arial"
    };
    const handleEvent = () => {
    //   setData([props.username && props.password]);
      let data= props.password;
      let dyta=props.username;
    // const database = 
    //     {
    //       username: "Ahad",
    //       password: "123",
    //     }
    // if (database.username === usernamme && database.password === passworrd)
    // if(data.username===usernamme && data.password===passworrd)
    if( data ===passworrd && dyta === usernamme){
      setAlert("You've Sucessfully Logged in");
    } else {
      setAlert("Incorrect Password try again");
    }
  };
  return (
    <div>
      <label>UserName</label>
      <input type="text" onChange={(e)=>setUsernamme(e.target.value)} />
      <label>Password</label>
 <input type="text" onChange={(e)=>setPassworrd(e.target.value)} />
      <button onClick={handleEvent} >Login</button>
      <h1 style={myStyle}>{alert}</h1>
    </div>
  );
}

export default PassInput;
