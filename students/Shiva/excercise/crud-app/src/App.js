import React from "react";
import { Router,Route, Routes }
    from 'react-router-dom';
import Create from "./Create";
import Home from "./Home";
import ReactDOM   from 'react-router-dom';
import Edit from "./Edit";
import Delete from "./Delete";

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element= {<Create/>} />
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/delete" element={<Delete/>}/>
    </Routes>
   </div>
  );
}

export default App;
