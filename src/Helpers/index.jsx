// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfQkPOTQNL8iWvYl9UriFxmSkJF78zykc",
  authDomain: "notessharingbca.firebaseapp.com",
  projectId: "notessharingbca",
  storageBucket: "notessharingbca.appspot.com",
  messagingSenderId: "79610165795",
  appId: "1:79610165795:web:54071d8ecdb52b8c4dcf96",
  measurementId: "G-60N2CLMPSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}