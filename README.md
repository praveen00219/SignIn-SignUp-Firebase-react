# SignIn-SignUp with Firebase Authentication

This project is a simple sign-in page built with React that allows users to sign in & SignUp using their email and password, or via Google sign-in. Firebase Authentication is used to handle the authentication logic.

## Features

- Sign & SignUp in with email and password
- Google Sign-in using Firebase
- Error handling for both sign-in methods
- Loading states for better UX
- Tailwind CSS for styling

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Go to **Authentication** and enable **Email/Password** and **Google** sign-in methods.
4. Get your Firebase config from the Firebase console by going to **Project Settings**.
5. Add the config to a `firebase.js` file in the `config` folder.

Here’s an example `firebase.js` file:

```javascript
// src/config/firebase.js-------->
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```
