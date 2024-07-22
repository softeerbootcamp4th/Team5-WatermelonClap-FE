import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const fbAuth = getAuth(app);
const provider = new GoogleAuthProvider();

export const useAuth = () => {
  const [auth, setAuth] = useState<User | null>(null);
  const [isAuthInit, setIsAuthInit] = useState(false);
  useEffect(() => {
    fbAuth.onAuthStateChanged((auth) => {
      setAuth(auth);
      setIsAuthInit(true);
    });
  }, []);

  return {
    auth,
    isAuthInit,
    login: () => {
      signInWithPopup(fbAuth, provider);
    },
    logout: () => {
      signOut(fbAuth);
    },
  };
};
