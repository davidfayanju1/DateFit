// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD305qyAkaADDdwIzfaCAZ7QeeYHr8FnAQ",
  authDomain: "datefit-122d2.firebaseapp.com",
  projectId: "datefit-122d2",
  storageBucket: "datefit-122d2.appspot.com",
  messagingSenderId: "18043249015",
  appId: "1:18043249015:web:78936c990ebad13cb18172",
  measurementId: "G-WCCJY1MWYF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
