// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDQ8CebJ1JHDrZC5azqabCeLCOaNdQQudw",
  authDomain: "netflix-9493e.firebaseapp.com",
  projectId: "netflix-9493e",
  storageBucket: "netflix-9493e.appspot.com",
  messagingSenderId: "282281304174",
  appId: "1:282281304174:web:63298112549d79000cc67f",
  measurementId: "G-YERX3TD4XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export default storage