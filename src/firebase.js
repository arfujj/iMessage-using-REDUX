import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBufrb_ets10_IP8ChoN-f7oAXna_cJuJk",
    authDomain: "imessage-clone-85436.firebaseapp.com",
    projectId: "imessage-clone-85436",
    storageBucket: "imessage-clone-85436.appspot.com",
    messagingSenderId: "388085803837",
    appId: "1:388085803837:web:1c984cbea937dfdf5c7354",
    measurementId: "G-7XYLCLV92B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth,provider};
  export default db;

