import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyD2vUPPhi1tRdszPITCRcXdS_4hoiweY2A",
    authDomain: "react-ecommerce-clothing-store.firebaseapp.com",
    projectId: "react-ecommerce-clothing-store",
    storageBucket: "react-ecommerce-clothing-store.appspot.com",
    messagingSenderId: "759465364919",
    appId: "1:759465364919:web:b89ef33adbcd5013026c32",
    measurementId: "G-CM3CXQEKHH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({propmt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;