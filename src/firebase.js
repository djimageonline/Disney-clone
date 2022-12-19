// // import { initializeApp } from "firebase/app";
// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRWvVFZuoIL5tBd98OsAcJtlY3HxLOT5k",
  authDomain: "disneyplus-clone-7ef20.firebaseapp.com",
  projectId: "disneyplus-clone-7ef20",
  storageBucket: "disneyplus-clone-7ef20.appspot.com",
  messagingSenderId: "119444677491",
  appId: "1:119444677491:web:25166ecba9555cea721b06",
  measurementId: "G-S90D7MJXDK",
};

//Initialize app, authentication, login with google social email, and store our videos in firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
