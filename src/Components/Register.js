import React ,{useState} from "react";
import "./Register.css"
function Register() {
    let[formData, setFormData] = useState({
        name:"", email: "", phoneNo:"", password: ""

    })
    function handleChange(event){
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    
    }
       const handleSubmit =(e)=>{
        e.preventDefault()
        alert("Registered Successfully")
        console.log("submit");
      }
  return (
    <div className="containers">
    <form className="forms" onSubmit={handleSubmit}>
    <h1>Sign Up</h1>
    <label htmlFor='username'>Name: </label><br/>
    <input type='text' id='username' name='name' value
    ={formData.name} placeholder='Enter your Name' required onChange= {handleChange}></input><br/><br/>
    <label htmfor ="email">Email :</label><br/>
    <input type="text" id="email" name="email" value={formData.email}placeholder="Enter  email" required onChange={handleChange}></input><br></br>
     <label hrmfor ="phoneNo">phone No:</label><br/>
     <input type="number" id="phoneNO" name="phoneNo"value={formData.phoneNo} placeholder="enter your phoneNo" required onChange={handleChange}></input><br></br>
     <label htmfor = "password">Password</label><br></br><input type="text" id ="password"name="password" value={formData.password}placeholder="enter your passsword"required onChange={handleChange}></input><br></br>

    <button className="btn" type='submit'>Register</button>


     
       </form>
    </div>
  )
}

export default Register