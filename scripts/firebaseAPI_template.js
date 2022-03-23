//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDR9hxa2k1qk-fbQTpKTPRsKUCAdYKRogs",
    authDomain: "fir-comp-1800-24315.firebaseapp.com",
    projectId: "fir-comp-1800-24315",
    storageBucket: "fir-comp-1800-24315.appspot.com",
    messagingSenderId: "532024176449",
    appId: "1:532024176449:web:77a144c70845b96a593bc0"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
