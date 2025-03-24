// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "trackizer-902a2.firebaseapp.com",
  projectId: "trackizer-902a2",
  storageBucket: "trackizer-902a2.appspot.com",
  messagingSenderId: "481912555264",
  appId: "1:481912555264:android:4b6c33a6978b7c7c5315e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
