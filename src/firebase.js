import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlTW9mA_xRTaGwPi7dmfTnWAPP2D5_OgQ",
  authDomain: "thebasicyearbook.firebaseapp.com",
  projectId: "thebasicyearbook",
  storageBucket: "thebasicyearbook.appspot.com",
  messagingSenderId: "725438644760",
  appId: "1:725438644760:web:39bb1f98976df593b8f96d",
  measurementId: "G-HBJV6S24C5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
