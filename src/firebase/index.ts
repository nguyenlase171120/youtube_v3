// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQrm5aLWxd0xoTmw9GULyJg7FZzb_0Zi0",
  authDomain: "v3-2adf6.firebaseapp.com",
  projectId: "v3-2adf6",
  storageBucket: "v3-2adf6.appspot.com",
  messagingSenderId: "440290938017",
  appId: "1:440290938017:web:dde8f760a3d7d007a134e0",
  measurementId: "G-ELH26YCHDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
