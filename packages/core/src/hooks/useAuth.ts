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
  const login = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(fbAuth, provider)
        .then((res) => res.user.getIdToken())
        .then((token) => {
          localStorage.setItem("accessToken", token);
          resolve(token);
        })
        .catch((error) => reject(error));
    });
  };

  const logout = () =>
    signOut(fbAuth).then(() => {
      localStorage.removeItem("accessToken");
    });

  const reLogin = () => logout().then(() => login());
  const getIsLogin = () => Boolean(localStorage.getItem("accessToken"));

  /**
   * 유효하지 않은 토큰으로 API 호출 시 로그인 시키는 함수
   *
   * API 호출 후 catch에서 받아온 Error 객체를 인자로 넣어주세요
   */
  const handleTokenError = async (error: Error) => {
    if (error.message === "403") {
      await reLogin();
      location.reload();
    } else {
      throw error;
    }
  };

  return {
    login,
    logout,
    reLogin,
    getIsLogin,
    handleTokenError,
  };
};
