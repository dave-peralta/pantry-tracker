// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Y6gCB61fFdmgh_3kXXJTxmtEOiBP0JA",
  authDomain: "inventory-management-b064b.firebaseapp.com",
  projectId: "inventory-management-b064b",
  storageBucket: "inventory-management-b064b.appspot.com",
  messagingSenderId: "413261782739",
  appId: "1:413261782739:web:5e091d1b99eccd9802fe26",
  measurementId: "G-SX6FNR6848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
