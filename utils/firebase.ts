import firebase from "firebase";
import firebaseConfig from '../firebase.config';
// Required for side-effects
require("firebase/firestore");

export const getFirestore = (() => {
  let db: firebase.firestore.Firestore | null;

  return () => {
    if(db == null) {
      firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
    }
    return db;
  }
})();