// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa9dEjGa92xySejLPjswaDMb5lFqPJUHM",
    authDomain: "japanese-cuisine-aad03.firebaseapp.com",
    projectId: "japanese-cuisine-aad03",
    storageBucket: "japanese-cuisine-aad03.appspot.com",
    messagingSenderId: "962848699880",
    appId: "1:962848699880:web:557ab5edaff833e40e605d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;