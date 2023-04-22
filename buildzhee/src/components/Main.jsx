import React from "react";
import images from '../assets';

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase, ref, get, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseConfig"


const Main = () => {

  const navigate = useNavigate();
  const [classChoice, setClass] = useState("random")
  const [subclassChoice, setSubclass] = useState("random")

  const [userId, setUserId] = useState(location.search.split("=")[1])

  const auth = getAuth();
  const user = auth.currentUser;


  console.log(userId)

  const changePage = (classChoice, subclassChoice) => {
    console.log(classChoice + " " + subclassChoice)
    navigate(`/game?uid=${user.uid}`, {
      state: { subclass: subclassChoice, class: classChoice },
    })
  };

  const toWeapons = () => {
    navigate(`/weapons?uid=${user.uid}`)
  }
  const toArmor = () => {
    navigate(`/armor?uid=${user.uid}`)
  }

  const toLogin = () => {
    navigate("/login")
  }

  const onOptionClassChange = e => {
    setClass(e.target.value)
  }

  const onOptionSubclassChange = e => {
    setSubclass(e.target.value)
  }

  return (
    <div id="main-div">
      <img class="login-butt" src={images.login} onClick={() => toLogin()} />
      <img class="title-image" src={images.title} />
      <h1></h1>
      <br></br>
      <div class="main-page">
        <div class="class-box-main column-main">
          <h1 id="class-text" for="class">  Choose Class  </h1>
          <div class="class-images">
            <div class="row">
              <label>
                <input type="radio"
                  name="classq"
                  value="random"
                  onChange={onOptionClassChange} />
                <img class="image main-class" src={images.none} alt="Random" />
              </label>
              <label>
                <input type="radio"
                  name="classq"
                  value="warlock"
                  onChange={onOptionClassChange} />
                <img class="image main-class" src={images.warlock} alt="Warlock" />
              </label>
            </div>
            <label>
              <input type="radio"
                name="classq"
                value="hunter"
                onChange={onOptionClassChange} />
              <img class="image main-class" src={images.hunter} alt="Hunter" />
            </label>
            <label>
              <input type="radio"
                name="classq"
                value="titan"
                onChange={onOptionClassChange} />
              <img class="image main-class" src={images.titan} alt="Titan" />
            </label>
          </div>
        </div>

        <div class="center-box column-main">
          <div class="row">
            <hr class="solid"></hr>
            <ul>
              <li class="howto-list">Welcome to Buildzhee! Select a class and subclass to begin playing, or select "None" to choose a random one! You will not be able to change your class and subclass after this.</li>
            </ul>
            <hr class="solid"></hr>
            <ul>
              <li class="howto-list">You will have 15 reroll points, which can be spent to reroll your super, grenade, melee, class ability, aspects, fragments, and exotics. Once all 15 are spent, the result is your build!</li>
            </ul>
            <hr class="solid"></hr>
            <ul>
              <li class="howto-list">Log in to select your acquired Exotic Weapons and Armor. Press "Play" to play as a guest.</li>
            </ul>
            <hr class="solid"></hr>

            <div class="main-buttons">
              <img class="weapons-butt" src={images.weapons} onClick={() => toWeapons()} />
              <img class="armor-butt" src={images.armor} onClick={() => toArmor()} />
              <img onClick={() => changePage(classChoice, subclassChoice)} class="play-butt" src={images.play} />
            </div>
          </div>
        </div>

        <div class="subclass-box-main column-main">
          <div class="row">
            <h1 id="subclass-text" for="subclass">Choose Subclass</h1>
            <div class="subclass-images">
              <div class="row">
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="random"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.none} alt="Random" />
                </label>
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="void"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.grape} alt="Void" />
                </label>
              </div>
              <div class="row">
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="solar"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.solar} alt="Solar" />
                </label>
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="arc"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.arc} alt="Arc" />
                </label>
              </div>
              <label>
                <input type="radio"
                  name="subclassq"
                  value="stasis"
                  onChange={onOptionSubclassChange} />
                <img class="image main-subclass" src={images.stasis} alt="Stasis" />
              </label>
              <label>
                <input type="radio"
                  name="subclassq"
                  value="strand"
                  onChange={onOptionSubclassChange} />
                <img class="image main-subclass" src={images.strand} alt="Strand" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;