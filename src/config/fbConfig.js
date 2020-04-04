import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDjYyIw_qbkN-FgPD1UJUrCY6r2QZI00ts",
  authDomain: "react-projects-management.firebaseapp.com",
  databaseURL: "https://react-projects-management.firebaseio.com",
  projectId: "react-projects-management",
  storageBucket: "react-projects-management.appspot.com",
  messagingSenderId: "419090995375",
  appId: "1:419090995375:web:78743f538c2e39b7eb1c5a",
  measurementId: "G-8VYMMVEE14",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
