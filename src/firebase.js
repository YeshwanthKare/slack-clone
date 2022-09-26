import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSqTThPVWyv4X38gNEOrd4lUA5CHSU9dc",
  authDomain: "slack-clone-179b1.firebaseapp.com",
  projectId: "slack-clone-179b1",
  storageBucket: "slack-clone-179b1.appspot.com",
  messagingSenderId: "641809031796",
  appId: "1:641809031796:web:58d3b9597342d54f622721",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;
