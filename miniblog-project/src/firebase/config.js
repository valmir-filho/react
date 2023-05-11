// Firebase.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1k9kGc3NeywleqwYfeKv0VKpQ-_lraUI",
    authDomain: "miniblog-6d3fe.firebaseapp.com",
    projectId: "miniblog-6d3fe",
    storageBucket: "miniblog-6d3fe.appspot.com",
    messagingSenderId: "361373119799",
    appId: "1:361373119799:web:e3b4b1963003da4f8fd6b2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };