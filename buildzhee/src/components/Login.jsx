import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation, useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase, ref, get, onValue } from "firebase/database";
import { db } from "./firebaseConfig"


const firebaseConfig = {
  apiKey: "AIzaSyCwGDc3gO55AomtivU8SGv2-yu2zAkZ50g",
  authDomain: "buildzhee.firebaseapp.com",
  projectId: "buildzhee",
  storageBucket: "buildzhee.appspot.com",
  messagingSenderId: "450452249746",
  appId: "1:450452249746:web:8c2b66d35f0770843eda4b",
  measurementId: "G-VT9B73LZMC"
};

function retUser() {

}

const Login = () => {

  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


  const toHome = () => {
    navigate("/")
  }

  const retUser = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      // Create a new user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate(`/?uid=${userCredential.user.uid}`);
    } catch (error) {
      console.log(error)
    }
  }

  const newUser = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(db, "users", userCredential.user.uid);
      const userData = {
        email: email,
        weapons: [],
        armor: []
        // add any other information you want to store for the user
      };
      setDoc(userDocRef, userData)
        .then(() => {
          console.log("User document created successfully!");
        })
        .catch((error) => {
          console.error("Error creating user document: ", error);
        });

      // Redirect the user to a different page with their information
      navigate(`/?uid=${userCredential.user.uid}`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <img class="home-butt" src={images.home} onClick={() => toHome()} />
      <img class="login-title" src={images.title} />
      <div class="login-grid">
        <div class="login-box">
          <h1 id="class-text" for="class">  Returning User  </h1>
          <form onSubmit={retUser}>
            <label class="login-label" for="suemail">Email:</label>
            <br />
            <input class="login-input" id="suemail" type="text" name="suemail" required /><br />
            <br />
            <label class="login-label" for="supassword">Password:</label>
            <br />
            <input class="login-input" type="text" name="supassword" required /><br />
            <input type="image" name="submit" class="conf-login" src={images.login} onSubmit={(e) => { retUser() }}></input>
          </form>
        </div>
        <div class="login-box">
          <h1 id="class-text" for="class">  New User  </h1>
          <form onSubmit={newUser}>
            <label class="login-label" for="liemail">Email:</label>
            <br />
            <input class="login-input" type="text" name="liemail" /><br />
            <br />
            <label class="login-label" for="lipassword">Password:</label>
            <br />
            <input class="login-input" type="text" name="lipassword" /><br />
            <input type="image" name="submit" class="conf-login" src={images.register} onSubmit={(e) => newUser()}></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;