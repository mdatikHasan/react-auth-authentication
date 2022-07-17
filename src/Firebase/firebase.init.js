import { initializeApp } from "firebase/app";
// .\src\Firebase\firebase.config.js'
import firebaseConfig from "../Firebase/firebase.config";



const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;