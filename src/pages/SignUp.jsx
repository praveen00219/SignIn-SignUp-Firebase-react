import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Sign up successful:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In successful:", user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleEmailSignUp} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <button
        onClick={handleGoogleSignUp}
        className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
      >
        Sign Up with Google
      </button>
    </div>
  );
};

export default SignUp;
