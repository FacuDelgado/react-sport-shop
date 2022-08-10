import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlBk7QN2vs0BGPlGNhgn8CkT_BQy8VRTM",
  authDomain: "react-sport-shop-e9e31.firebaseapp.com",
  projectId: "react-sport-shop-e9e31",
  storageBucket: "react-sport-shop-e9e31.appspot.com",
  messagingSenderId: "364603668153",
  appId: "1:364603668153:web:5c4c8fa0c1cacb6b848d68"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)