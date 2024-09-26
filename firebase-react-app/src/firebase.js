// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8VGCSgw6vt65-7atI0y526rBqu1-GkeY",
  authDomain: "todo-app-3d49a.firebaseapp.com",
  projectId: "todo-app-3d49a",
  storageBucket: "todo-app-3d49a.appspot.com",
  messagingSenderId: "481653462438",
  appId: "1:481653462438:web:c7228c71615626be926b67",
  measurementId: "G-524Q7C1V2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);