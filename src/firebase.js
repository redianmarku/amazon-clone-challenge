import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmkqOL-5NkFM5EjlRY9I8Xv4OKc1JFPnk",
  authDomain: "challenge-83040.firebaseapp.com",
  databaseURL: "https://challenge-83040.firebaseio.com",
  projectId: "challenge-83040",
  storageBucket: "challenge-83040.appspot.com",
  messagingSenderId: "128482264401",
  appId: "1:128482264401:web:a943f9bad87a2f893cff70",
  measurementId: "G-4HFEGMD6YR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
