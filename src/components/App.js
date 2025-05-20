
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {isLoggedIn?<p>You are logged in!</p>: <form onSubmit={handleLogin}>
          <label htmlFor="userName">Username: </label>
          <input type="text" id="userName"/>
          <br></br>
          <br></br>
          <br></br>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password"/>
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" value="Login"></input>
        </form>}
        
    </div>
  )
}

export default App
