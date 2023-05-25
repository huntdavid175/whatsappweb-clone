// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKw1KJJBGAHms6rQV4TnT_p34mQsfNecE",
  authDomain: "whatsapp-clone-ddeb5.firebaseapp.com",
  projectId: "whatsapp-clone-ddeb5",
  storageBucket: "whatsapp-clone-ddeb5.appspot.com",
  messagingSenderId: "913738842957",
  appId: "1:913738842957:web:13560aa7b193a0f159ad04",
};

// Initialize Firebase
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(firebaseApp);

export { auth };
