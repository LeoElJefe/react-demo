// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbJkH4FHCUDue02L6iIne-jTkkRVXDUjQ",
  authDomain: "fire-demo-affd9.firebaseapp.com",
  projectId: "fire-demo-affd9",
  storageBucket: "fire-demo-affd9.appspot.com",
  messagingSenderId: "280474496165",
  appId: "1:280474496165:web:7547958705d046c54ab14c",
  measurementId: "G-9ST16Y7L4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();