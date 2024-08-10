import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
  return {
    login: (callback: () => void = () => {}) => {
      signInWithPopup(fbAuth, provider).then((res) =>
        res.user.getIdToken().then((token) => {
          localStorage.setItem("accessToken", token);
          callback();
        }),
      );
    },
    logout: () => {
      signOut(fbAuth).then(() => {
        localStorage.removeItem("accessToken");
      });
    },
    getIsLogin: () => Boolean(localStorage.getItem("accessToken")),
  };
};
