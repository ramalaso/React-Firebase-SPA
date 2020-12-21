import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBJYNvnfQ2OZgPV3cYoKmx9Sv5rE96663s",
    authDomain: "react-spa-9c487.firebaseapp.com",
    databaseURL: "https://react-spa-9c487-default-rtdb.firebaseio.com",
    projectId: "react-spa-9c487",
    storageBucket: "react-spa-9c487.appspot.com",
    messagingSenderId: "352594379966",
    appId: "1:352594379966:web:2861b509ce2a1d9adb8aef",
    measurementId: "G-NYMZPW5WFL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider()
  export const auth = firebase.auth();

  export default firebase;