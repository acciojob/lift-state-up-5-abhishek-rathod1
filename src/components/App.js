import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <h1>You are logged in!</h1>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
