import React, { useState } from "react";

function SignUp({ setStudent }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((student) => setStudent(student));
      }
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 id="login">Sign Up</h1>
        <label className="label"htmlFor="username">Username</label>
        <input
        className="input"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label" htmlFor="password">Password</label>
        <input
        className="input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label className="label" htmlFor="password">Password Confirmation</label>
        <input
        className="input"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button className="btn"type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;