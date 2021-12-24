import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage'
import 'firebase/firestore'


// const firebaseConfig = {
//     apiKey: "AIzaSyBa0RI-zx9yBjz-HKqoqauWr_Qsf2fysVs",
//     authDomain: "hackfortomorrow-59167.firebaseapp.com",
//     projectId: "hackfortomorrow-59167",
//     storageBucket: "hackfortomorrow-59167.appspot.com",
//     messagingSenderId: "1060314622661",
//     appId: "1:1060314622661:web:bc67d8adb1d15aec195eac",
//     measurementId: "G-1VVQRCSDYG"
//   };
//   export default firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp({
  apiKey: "AIzaSyBa0RI-zx9yBjz-HKqoqauWr_Qsf2fysVs",
    authDomain: "hackfortomorrow-59167.firebaseapp.com",
    projectId: "hackfortomorrow-59167",
    storageBucket: "hackfortomorrow-59167.appspot.com",
    messagingSenderId: "1060314622661",
    appId: "1:1060314622661:web:bc67d8adb1d15aec195eac",
    measurementId: "G-1VVQRCSDYG"

})
export const auth = app.auth()
export const db = firebase.firestore()

export default app