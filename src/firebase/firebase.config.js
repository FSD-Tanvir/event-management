// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjXUqB2dDEWG2H3ZXssQQfo2nxXZ8C2xM",
  authDomain: "eventist-48f83.firebaseapp.com",
  projectId: "eventist-48f83",
  storageBucket: "eventist-48f83.appspot.com",
  messagingSenderId: "359291178485",
  appId: "1:359291178485:web:f3c598b7e0e74895f664bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth