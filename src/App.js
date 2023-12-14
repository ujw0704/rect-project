import React from 'react';
import './App.css';
//  import Home from './Components/Home';
// import Contact from './Components/Contact';
// import Api from './Components/Api';
// import About from "./Components/About"
// import Login from './Components/Login';
import Login from './Login1';
//  import Register from './Components/Register';
//  import Header from './Components/Header';
// import { BrowserRouter ,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/Login' element={<Login/>}>Login</Route>
         
          <Route path ="/" element ={<Home/> }>Home</Route>  
        <Route path='/About'  element ={<About/>}>About</Route> 
         <Route path='/Api' element={<Api/>}></Route>  
         <Route path ='/Contact' element ={<Contact/>}>Contact</Route>   
           <Route path='/Register' element ={<Register/>}>Register</Route>  
     </Routes>
     </BrowserRouter> */}
      <Login/>
    </div>
  );
}

export default App;
