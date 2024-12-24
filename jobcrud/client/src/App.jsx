import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; 
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Personaldet from './components/Personaldet';

function App() {
  return (
    <div>
      <h1 className='align-items-centre text-center' >Welcome to the Job Portal</h1>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route> 
          <Route path='/personaldet' element={<Personaldet/>}></Route>        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
