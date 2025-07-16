import React, { useState } from "react";

function LoginForm({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      // onLogin(); // Inform parent to update the state
      setIsLoggedIn(true)
    }
  };

  return (
    <form onSubmit={handleSubmit}>      
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Passwrod"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" >Login</button>
    </form>
  );
}

export default LoginForm;
