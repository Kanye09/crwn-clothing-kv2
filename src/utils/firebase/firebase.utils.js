import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkLLYRSAAIQbXAko7Dx-bI8-ILp3N5F2Q",
  authDomain: "crwn-clothing-kv2-db.firebaseapp.com",
  projectId: "crwn-clothing-kv2-db",
  storageBucket: "crwn-clothing-kv2-db.appspot.com",
  messagingSenderId: "949502076356",
  appId: "1:949502076356:web:a73897a7d545a951477091",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
