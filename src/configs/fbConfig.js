import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsMdW3ZbTz1IUBeZJXfZLlZDund-iClc4",
  authDomain: "valdorah-helper-game.firebaseapp.com",
  databaseURL: "https://valdorah-helper-game.firebaseio.com",
  projectId: "valdorah-helper-game",
  storageBucket: "valdorah-helper-game.appspot.com",
  messagingSenderId: "551277249680",
  appId: "1:551277249680:web:181f88a049a77782198415"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;