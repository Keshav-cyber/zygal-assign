import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import './Page-2.css';


const PageTwo = () => {

    const [message,setMessage] = useState("");
    const [search,setSearch] = useState("");
    const [text ,setText ] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem(message, JSON.stringify(message));
        setMessage('')
    }
   
    const handleSearch = (e) =>{
        e.preventDefault();
        let show = localStorage.getItem(search);
        console.log(show)
        setText(show)
        setSearch('')
    }
    
    const handleRemove =(e)=>{
        e.preventDefault();
        localStorage.clear()
    }

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
            window.location.reload();
          }
      


    return(
        <div>
            <form onSubmit={handleSubmit}>
             <div>
              <label>Submit text message </label>
              <input type="text" name="message" placeholder="message"
              value ={message}
              onChange={(e)=>setMessage(e.target.value)}
              />
              <button type="submit"> Submit</button>
             </div>
          </form>
          <div>
             <form onSubmit={handleSearch}>
              <label>Search text message </label>
              <input type="text" name="message" placeholder="message"
              value ={search}
              onChange={(e)=>setSearch(e.target.value)}
              />
              <button type="submit" > Search </button>
              </form>
          </div>
      
              
           <div  className="textarea">  <> {text} </> </div>
          
          <div>
            <form onSubmit={handleRemove}>
          <button type="submit" > Clear ALL </button>
          </form>
          </div>
          <form onSubmit={logout}>
          <button type="submit" > Logout </button>
          </form>
        </div>
      
    )

}

export default PageTwo;