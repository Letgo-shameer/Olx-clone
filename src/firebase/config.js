import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRyNLPprfu2_TP1UYf5ZOmhTAdilb-aVs",
    authDomain: "react-olx-93bfb.firebaseapp.com",
    projectId: "react-olx-93bfb",
    storageBucket: "react-olx-93bfb.appspot.com",
    messagingSenderId: "215629780235",
    appId: "1:215629780235:web:45b1bfebdecf88a40d7e0e",
    measurementId: "G-WJSBKY5YRY"
  };

export default firebase.initializeApp(firebaseConfig)