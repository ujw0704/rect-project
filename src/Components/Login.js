import React, {useState}from 'react'
// import { Link } from 'react-router-dom';
import "./Login.css"
 function Login() {
    let [formData, setFormData] = useState({
        name :"" ,email : "" ,password : ""


    })
    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        }

  return (

    <div className="container">
    <form  className ="form"onSubmit={handleSubmit}>
    <h1>login</h1>
    <label  className ="placeholder"htmlFor='username'>Name: </label><br/>
    <input type='text' id='username' name='name' value
    ={formData.name} placeholder='Enter your Name' required onChange= {handleChange}></input><br/><br/>
    <label  className ="placeholder"htmfor ="email">Email :</label><br/>
    <input type="text" id="email" name="email" value={formData.email}placeholder="Enter  email" required onChange={handleChange}></input><br></br>
    <label htmfor = "password">Password</label><br></br><input type="password" id ="password"name="password" value={formData.password}placeholder="enter your passsword"required onChange={handleChange}></input><br></br>
    <button  className ="btn"type='submit'>submit</button>
    </form>
     <div className='register'>
   
     </div>
    </div>
  )
}
export default Login
// import React, { useState} from 'react'
// import { Link } from 'react-router-dom'
// import axios from "axios"
// import "./Login.css"
// import {useNavigate} from "react-router-dom"; 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { porturl } from '../url/porturl'; 


// function Login() {
  
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
  //  const navigate = useNavigate()

  // function handleSubmit(e) {

    // e.preventDefault() 
        //  axios.post(porturl + "/login", {username, password})
        //  .then((result) => {
        //   console.log(result)
        //     if(result.data.status === 200){ 
        //       localStorage.setItem("session", result.data.savedToken); 

              // toast.success("You have succesfully logged in")
              // setTimeout(() =>{
              //   navigate("/")
              // }, 3000)
                
        //     } else {
        //       toast.error("You have put wrong password and username!") 
        //       setUsername("")
        //       setPassword("")
          //  }
        //     // toast.error("You have put wrong password and username!")
        //  }).catch((err) =>{
        //  error("Request failed!")
  //            console.log(err)
  //        })
  // }
  
  // return (
  //   <div className='login'>
  //   <div className='container'>
  //   <div className='loginLeft'></div>
  //   <div className='loginRight'>
  //   <h2>Login</h2>
  //       <form method='post' onSubmit={handleSubmit}>
  //       <input 
  //       required
  //       type='text' 
  //       name='username' 
  //       placeholder='Username'
  //       value={username}
  //       onChange={(e) => {setUsername(e.target.value)}}
  //        />  <br />
  //       <input 
  //       required
  //       type='password'
  //       name='password'
  //       placeholder='Password'
  //       value={password}
  //       onChange={(e) => {setPassword(e.target.value)}}
  //        /><br />
  //        <div className='btns'> 
  //       <button type="submit" name='login'>Submit</button>
//         {/* <p>Don't have an account? <Link to="/register">Create</Link></p> */}
//         </div>
//         {*/ <ToastContainer position='top-center' autoClose={3000} theme='dark'/> */}
// //     </form>
//     </div> 
      
//     </div>
//     </div>
//   )
// }

// export default Login