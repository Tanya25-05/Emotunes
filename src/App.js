import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate} 
  from "react-router-dom";
import Login from './Files/Login/Login'
import Register from './Files/Register/Register'
import Home from './Files/Home/Home1'
import Navbar from './navbar/Navbar';
import "./input.css"
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
   </Routes>
  </Router> 
    </div>
  );
}

export default App;
