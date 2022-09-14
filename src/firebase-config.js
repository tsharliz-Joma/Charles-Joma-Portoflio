
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCznCv4MExNVX20mNW-wT62-MdKV5AUWZQ",
  authDomain: "charles-joma-portfolio.firebaseapp.com",
  projectId: "charles-joma-portfolio",
  storageBucket: "charles-joma-portfolio.appspot.com",
  messagingSenderId: "932374356202",
  appId: "1:932374356202:web:326b3c3016a0ea04f1f793",
  measurementId: "G-4S3BMBWTW6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);