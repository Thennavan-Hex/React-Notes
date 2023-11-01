import React, { useState } from "react";
import { auth } from "firebase/app";
import "firebase/auth";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};

export default Signup;
