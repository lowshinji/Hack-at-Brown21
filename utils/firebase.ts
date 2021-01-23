import firebaseConfig from '../firebase.config';
import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

const COLLECTION_ID = "i2";
// eslint-disable-next-line no-var
var db: firebase.firestore.Firestore | null;

export const getFirestore = (): firebase.firestore.Firestore => {
  if(db == null) {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  }
  return db;
}

export const getDocument = async (): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> => {
  return await getFirestore().collection("rooms").doc(COLLECTION_ID);
}

export const deleteDocument = async (): Promise<void> => {
  const roomRef = await getDocument();
  const calleeCandidates = await roomRef.collection('calleeCandidates').get();
  calleeCandidates.forEach(async candidate => {
    await candidate.ref.delete();
  });
  const callerCandidates = await roomRef.collection('callerCandidates').get();
  callerCandidates.forEach(async candidate => {
    await candidate.ref.delete();
  });
  await roomRef.delete();
}

export const createDocument = async (): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> => {
    let roomRef = await getDocument();
    const roomSnapshot = await roomRef.get();
    if (roomSnapshot.exists) {
      console.log('room already exists, deleting...');
      await deleteDocument()
      roomRef = await getDocument()
    }
    return roomRef;
}