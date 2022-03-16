import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuu0gabdgOYKTs0-1dHVn4IBPL-0ggyMs",
    authDomain: "whatup-1.firebaseapp.com",
    projectId: "whatup-1",
    storageBucket: "whatup-1.appspot.com",
    messagingSenderId: "960235829645",
    appId: "1:960235829645:web:4e67327211096a8f85a5c4"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };

