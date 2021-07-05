import Firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzjgy14VbR2uubQ60eQCIXKj5SnIzaEvg",
  authDomain: "todo-510d2.firebaseapp.com",
  projectId: "todo-510d2",
  storageBucket: "todo-510d2.appspot.com",
  messagingSenderId: "451345130643",
  appId: "1:451345130643:web:58fa15c51b7b3a39831966",
  measurementId: "G-2J6RVM2CMT"
};


const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore

export { firebase, FieldValue };

