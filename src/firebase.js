
  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQjQNE-LK7nn1wMYIgrHkhoo2WnaCRip0",
  authDomain: "linkedin-minor.firebaseapp.com",
  projectId: "linkedin-minor",
  storageBucket: "linkedin-minor.appspot.com",
  messagingSenderId: "567526034012",
  appId: "1:567526034012:web:e08d6ebdcf3ff169867499",
  measurementId: "G-HRFJNR1RFR"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };