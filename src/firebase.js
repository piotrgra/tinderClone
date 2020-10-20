import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "tinder-clone-678c0.firebaseapp.com",
  databaseURL: "https://tinder-clone-678c0.firebaseio.com",
  projectId: "tinder-clone-678c0",
  storageBucket: "tinder-clone-678c0.appspot.com",
  messagingSenderId: "907137940519",
  appId: "1:907137940519:web:0b1e22df9ee54f4547e202",
  measurementId: "G-LRTCG780VG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
