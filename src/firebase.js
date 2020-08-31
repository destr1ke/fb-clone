import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjmkMiw6nmSWKlhe4BS7mJFObf8ke7EF8",
    authDomain: "fb-clone-415b5.firebaseapp.com",
    databaseURL: "https://fb-clone-415b5.firebaseio.com",
    projectId: "fb-clone-415b5",
    storageBucket: "fb-clone-415b5.appspot.com",
    messagingSenderId: "271751457222",
    appId: "1:271751457222:web:034ee84bcbd15d8611eac7",
    measurementId: "G-19ZWR0SH9R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth , provider};
  export default db;