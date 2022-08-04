
import { Routes,Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Login from './Login';
import Header from './Nav';
import Res from './Res';


function App() {
  return (
    <div>
    <Header/>
     <Routes>
  <Route path='/res'  element={<Res/>} />
  <Route path='/login' element={<Login/>} />
    </Routes>
    
    </div>
  );
}

export default App;
