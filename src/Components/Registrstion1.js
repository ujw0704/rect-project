import React ,{useState}from 'react'
import "./Registartion.css";
//  import "./Login1.css"
function Registrstion() {
const [formData,setFormData] =useState({
  username :"",email:"",number:""

})

function handleChange(event){
  setFormData(prevFormData=>{
    return{...prevFormData,[event.target.name]: event.target.value }
    })
}





 
  return (
    <div className='register'>Registrstion
        <form >

           <div className='register'>
            <div className='register'>

          <input type='text' name='username' placeholder='enter your username' value={formData.username} required onChange={handleChange}/>
          <label htmlFor="Username">Username</label>
            </div>
             
          <div  className='register'> 

          <input type='text' name='name' placeholder='enter your name' value={formData.name} required onChange={handleChange}/>
          <label htmlFor="Name">Name</label>
          </div>
          <div className='register'>

          <input type='email'placeholder='enter your email'value={formData.email} required onChange={handleChange}/>
          <label htmlFor='email'>Email</label>
          </div>
          <div className='register'>

          <input type='number' placeholder='enter your number'value={formData.number} required onChange={handleChange}/>
          <label htmlFor='number'>Number</label>
          </div>

          </div>
        </form>
    </div>
  )
}

export default Registrstion