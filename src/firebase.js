// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVNz54GKlgOUPnF1utP87ddFauabsckMw",
  authDomain: "backend-8ed98.firebaseapp.com",
  projectId: "backend-8ed98",
  storageBucket: "backend-8ed98.appspot.com",
  messagingSenderId: "1089777517585",
  appId: "1:1089777517585:web:996916e9f69b689b4c9db0",
  measurementId: "G-YGB3R54FGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);