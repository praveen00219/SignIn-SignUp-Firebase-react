import React, { useState, useEffect } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null); // State to store the authenticated user

  // Firebase listener to track auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is logged in
      } else {
        setUser(null); // User is logged out
      }
    });
    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        setCurrentPage("home");
      })
      .catch((error) => console.log(error));
  };

  const renderPage = () => {
    if (user) {
      return (
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold">Welcome, {user.email}!</h1>
          <button
            onClick={handleSignOut}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      );
    }

    switch (currentPage) {
      case "signup":
        return <SignUp />;
      case "signin":
        return <SignIn />;
      default:
        return (
          <h1 className="text-2xl font-bold text-center mt-8">
            Welcome to our App!
          </h1>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => setCurrentPage("home")}
                className="flex-shrink-0 flex items-center"
              >
                Home
              </button>
            </div>
            <div className="flex items-center">
              {!user && (
                <>
                  <button
                    onClick={() => setCurrentPage("signup")}
                    className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setCurrentPage("signin")}
                    className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
};

export default App;
