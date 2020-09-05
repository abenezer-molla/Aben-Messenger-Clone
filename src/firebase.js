import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSzxLLhflS2djrCxjjDANpEwvJFdzNwGM",
    authDomain: "aben-messenger-clone.firebaseapp.com",
    databaseURL: "https://aben-messenger-clone.firebaseio.com",
    projectId: "aben-messenger-clone",
    storageBucket: "aben-messenger-clone.appspot.com",
    messagingSenderId: "80525989858",
    appId: "1:80525989858:web:5afaad09013128e5754bbb",
    measurementId: "G-GWWXDNFY0K"

});

const db = firebaseApp.firestore();

export default db;