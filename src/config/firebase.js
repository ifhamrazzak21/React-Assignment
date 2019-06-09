import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeJeW64SOkz-b5oMrNW26C-1AaQpAUP0I",
    authDomain: "react-project-21.firebaseapp.com",
    databaseURL: "https://react-project-21.firebaseio.com",
    projectId: "react-project-21",
    storageBucket: "react-project-21.appspot.com",
    messagingSenderId: "363876648287",
    appId: "1:363876648287:web:12dc4cfc6d4fc68b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default firebase;

