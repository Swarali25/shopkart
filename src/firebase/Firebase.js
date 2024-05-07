// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmF6UUmLw5vADnVDaACprCWVrxeFCqmw",
  authDomain: "shopkartdemo.firebaseapp.com",
  projectId: "shopkartdemo",
  storageBucket: "shopkartdemo.appspot.com",
  messagingSenderId: "392827696312",
  appId: "1:392827696312:web:8f4b9df1a36117f7ff304d",
  measurementId: "G-C0MVMS6QLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth,app}