import React, { useState } from 'react';
import "./Login1.css";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You submitted the form", formData);
 

    console.log(formData);
  }

  return (

   

    <div className='input-container'> 
      <section className='section'>
     
      <p>WELCOME TO LOGIN PAGE</p>
        </section>
       
      
      <form onSubmit={handleSubmit}>


     
        <h1>Login</h1>
        <div className="input-container"> 
          <input 
            type='text' 
            name="name" 
            id='username' 
            value={formData.name} 
            required 
            onChange={handleChange} 
            />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-container"> 
          <input 
            type={showPassword ? 'text' : 'password'} 
            name='password' 
            id='password' 
            value={formData.password} 
            required 
            onChange={handleChange} 
            />
          <label htmlFor='password'>Password</label> 
          <span 
            className="password-toggle" 
            onClick={togglePasswordVisibility}
            >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>
        <button type='submit'>Submit</button> 

      </form>
    </div>
          
  );
}

export default Login;

