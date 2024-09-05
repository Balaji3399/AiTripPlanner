// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" ;
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5FwHikduLX0zJct0XuyMUt4v6u18YMmY",
  authDomain: "aitripplanner-ae29a.firebaseapp.com",
  projectId: "aitripplanner-ae29a",
  storageBucket: "aitripplanner-ae29a.appspot.com",
  messagingSenderId: "19540285990",
  appId: "1:19540285990:web:e94ef72d2856e32187e4e7",
  measurementId: "G-CYNRJZ39Q7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;
// const analytics = getAnalytics(app);