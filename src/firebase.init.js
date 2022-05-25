// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2FbtN0_Or4cjDOaJRaqWXsg0CRwiC-iY",
    authDomain: "parts-house-41c77.firebaseapp.com",
    projectId: "parts-house-41c77",
    storageBucket: "parts-house-41c77.appspot.com",
    messagingSenderId: "979967815794",
    appId: "1:979967815794:web:f404affcb9c8c5dfd0d2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;