import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAlFDBUg_O168fm1hNdYZBCf5Ldsf2tSiM",
    authDomain: "disneyplus-clone-6496f.firebaseapp.com",
    projectId: "disneyplus-clone-6496f",
    storageBucket: "disneyplus-clone-6496f.appspot.com",
    messagingSenderId: "278159388705",
    appId: "1:278159388705:web:983f89e806b961df1db360",
    measurementId: "G-JZ3V91G0KL"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {
    auth,
    provider,
    storage,
};
export default db;