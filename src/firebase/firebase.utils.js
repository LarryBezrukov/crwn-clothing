import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYXBdKu-SW_jdUJjzfZXrxx6NL59-RaJ8",
  authDomain: "crwn-db-5d13a.firebaseapp.com",
  databaseURL: "https://crwn-db-5d13a.firebaseio.com",
  projectId: "crwn-db-5d13a",
  storageBucket: "",
  messagingSenderId: "122663434992",
  appId: "1:122663434992:web:bd3f6118394646f0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;