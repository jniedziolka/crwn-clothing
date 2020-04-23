import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-yWVwJJJH1Kr3sAlqCAb55nsBP1SEArM",
    authDomain: "crwn-db-bf903.firebaseapp.com",
    databaseURL: "https://crwn-db-bf903.firebaseio.com",
    projectId: "crwn-db-bf903",
    storageBucket: "crwn-db-bf903.appspot.com",
    messagingSenderId: "931628944964",
    appId: "1:931628944964:web:6c750ce30bb291cd03b611",
    measurementId: "G-22VM1Y3XYE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;