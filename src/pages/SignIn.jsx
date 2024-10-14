import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset previous error
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Sign in successful:", userCredential.user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null); // Reset previous error
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful:", result.user);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className={`w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className={`w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In with Google"}
      </button>
    </div>
  );
};

export default SignIn;
