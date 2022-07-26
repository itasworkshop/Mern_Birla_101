import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Calculator } from "./component/Calculator";
import { Grade } from "./component/Grade";
import { Login} from "./component/Login";
import { Login2 } from "./component/Login2";
import { Logout } from "./component/Logout";
import { Student } from "./component/Students";
import { Toggle } from "./component/Toggle";

function App() {

  return (
    <div >
      {/* <Calculator /> */}
      {/* <Grade/> */}
      {/* <Student /> */}

      <Toggle/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login num="123"/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </BrowserRouter>

      <Login2 pass="123" user="bhimendra"/>

     
      
      
    </div>
  );
}

export default App;