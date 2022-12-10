import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        if(email === '' || password ==='' ){
         
            alert("all fields are mandatory")
            return
         }
        await axios.post("http://localhost:5000/login", {
         email : email,
         password:  password,
        })
        .then((response) => {
            console.log(response.data.data.token)
          if (response.data.data.token) {
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/page-2");
            window.location.reload();
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    return(
        <div>
        <h2>login</h2>
        <form onSubmit={handleLogin}> 
          <div >
           <label> email : </label>
           <input type="text" name="email" placeholder="email"
           value = {email}
           onChange ={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
              <label>password : </label>
              <input type="text" name="password" placeholder="password"
              value ={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
          
          <button  > Submit </button>
        </form>
        </div>
      
    )
  
}

export default Login;