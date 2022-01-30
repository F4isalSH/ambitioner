import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmTiHWNn0DSAUYna-0vepwzVRmHG7erzc",
  authDomain: "ambitioner-3d73f.firebaseapp.com",
  projectId: "ambitioner-3d73f",
  storageBucket: "ambitioner-3d73f.appspot.com",
  messagingSenderId: "594670577795",
  appId: "1:594670577795:web:d608b46e03e735f5dd53b6",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
