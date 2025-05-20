import React from 'react'

const LoginForm = ({isLoggedIn, setIsLoggedIn}) => {
  const handleLogin = (e)=>{
    e.preventDefault();
    setIsLoggedIn(true);
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
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
        </form>
    </div>
  )
}

export default LoginForm