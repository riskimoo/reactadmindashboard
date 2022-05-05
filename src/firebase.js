import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-494f9.firebaseapp.com",
  projectId: "react-admin-494f9",
  storageBucket: "react-admin-494f9.appspot.com",
  messagingSenderId: "735965506129",
  appId: "1:735965506129:web:efbe71c4a83df4c3976670"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();