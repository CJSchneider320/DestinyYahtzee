import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwGDc3gO55AomtivU8SGv2-yu2zAkZ50g",
    authDomain: "buildzhee.firebaseapp.com",
    projectId: "buildzhee",
    storageBucket: "buildzhee.appspot.com",
    messagingSenderId: "450452249746",
    appId: "1:450452249746:web:8c2b66d35f0770843eda4b",
    measurementId: "G-VT9B73LZMC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };