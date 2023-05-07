const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDimKfg2Rfz6SfSnZ7tS8H9Myv1Ml80Gms",
  authDomain: "todoapp-17fcf.firebaseapp.com",
  projectId: "todoapp-17fcf",
  storageBucket: "todoapp-17fcf.appspot.com",
  messagingSenderId: "447844103516",
  appId: "1:447844103516:web:f85e4fec972b6ae4677d99",
  measurementId: "G-ZLCR55V2HS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const todosRef = db.collection("todos");
module.exports = todosRef;
