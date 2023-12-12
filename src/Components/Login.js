import React, {useState}from 'react'
import { Link } from 'react-router-dom';
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