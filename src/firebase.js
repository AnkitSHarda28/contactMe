import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVNqp_0d9-OJ1RDYw5dpu_Ngy911juDlA",
  authDomain: "react-contact-form-73c36.firebaseapp.com",
  projectId: "react-contact-form-73c36",
  storageBucket: "react-contact-form-73c36.appspot.com",
  messagingSenderId: "467592973122",
  appId: "1:467592973122:web:44648460349ce9bbf416db",
});

var db = firebaseApp.firestore();

export { db };
