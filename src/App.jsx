// import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate} 
  from "react-router-dom";
import Login from "./files/login/Login"
import Register from './files/register/Register'
import Home from './files/home/Home'
import Navbar from './files/navbar/Navbar';
// import "./input.css"
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route  path="/"
   element ={<Navigate to='/register'/>} /> 
   
   <Route path ='/login' element ={ <Login/>} />
   <Route path = '/register' element ={<Register/> } />
   <Route path= '/home' element={<Home/>}/>
   {/* <Route path= '' */}
   </Routes>
  </Router> 
    </div>
  );
}

export default App;
