import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import React from "react";

import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth,onAuthStateChanged } from "firebase/auth";

import Main from "./components/Main"
import Game from "./components/Game"
import Login from "./components/Login"
import Weapons from "./components/Weapons"
import Armor from "./components/Armor"

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
const auth = getAuth(app);

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, set the user state
                setUser(user);
            } else {
                // User is signed out, set the user state to null
                setUser(null);
            }
        });

        // Unsubscribe to the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/weapons" element={<Weapons />} />
                    <Route path="/armor" element={<Armor />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;