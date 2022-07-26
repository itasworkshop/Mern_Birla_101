import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Calculator } from "./component/Calculator";
import { Currency } from "./component/Currency";
import { CurrencyProps } from "./component/CurrencyProps";
import { Grade } from "./component/Grade";
import { Login} from "./component/Login";
import { LoginProps } from "./component/LoginProps";
import { Logout } from "./component/Logout";
import { Student } from "./component/Students";
import { Toggle } from "./component/Toggle";

function App() {

  return (
    <div >
      {/* <Calculator /> */}
      {/* <Grade/> */}
      {/* <Student /> */}

      {/* <Toggle/> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login num="123"/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </BrowserRouter> */}
      <LoginProps pass="123" user="bhimendra"/>

      {/* <Currency/>
      <CurrencyProps rupees="100" dollar="10"/> */}

     
      
      
    </div>
  );
}

export default App;
