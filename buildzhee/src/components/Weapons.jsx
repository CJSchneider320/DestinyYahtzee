import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDatabase, ref, get, onValue, up } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseConfig"

function DisplayImage(props) {
  return (
    <label class="exotic-weapons">
      <input type="checkbox"
        name={props.name}
        class="weaponCheckbox"
        value={props.weapInfo}
        defaultChecked={true}
      />
      <img
        class={"exotic-img"}
        src={props.img}
        alt={props.display} />
    </label>
  )
}

function selectAll() {
  console.log("hello")
  var checkboxes = document.getElementsByClassName("weaponCheckbox")
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true
  }
}

function deselectAll() {
  console.log("hello")
  var checkboxes = document.getElementsByClassName("weaponCheckbox")
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false
  }
}

function initList(currSlot) {
  var temp = []
  data.weapons.map((item, index) => {
    if (item.slot === currSlot) {
      temp.push(item)
    }
  })
  return temp
}

const Weapons = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [weapList, setWeapList] = useState(data.weapons);
  const [kinWeapList, setKinWeapList] = useState(initList("Kinetic"));
  const [eneWeapList, setEneWeapList] = useState(initList("Energy"));
  const [powWeapList, setPowWeapList] = useState(initList("Heavy"));

  const [userId, setUserId] = useState(location.search.split("=")[1])

  const auth = getAuth();
  const user = auth.currentUser;

  const toHome = () => {
    navigate(`/?uid=${user.uid}`)
  }

  function getCheckedBoxes() {
    const checkboxes = document.getElementsByClassName("weaponCheckbox");
    const checkedBoxes = [];

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedBoxes.push(checkboxes[i].name);
      }
    }

    console.log(checkedBoxes)

    if (!user) {
      console.error("No user is currently signed in.");
      return;
    }

    const userDocRef = doc(db, "users", user.uid);
    updateDoc(userDocRef, { weapons: checkedBoxes })
      .then(() => {
        console.log("Document updated successfully!");
        setTimeout(() => {
          navigate(`/?uid=${user.uid}`);
        }, 200);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  return (
    <div id="main-div">
      <img class="title-image" src={images.title} />
      <div class="conf-buttons-grid">
        <img class="conf-butt" src={images.selall} onClick={() => selectAll()} />
        <img class="conf-butt" src={images.deselall} onClick={() => deselectAll()} />
        <img class="conf-butt" src={images.confirm} onClick={() => getCheckedBoxes()} />
      </div>
      <div class="mega-weapons-grid">
        <div class="buffer-grid">
          <h1 class="buffer-header">Kinetic</h1>
          <div class="weapons-grid">
            {kinWeapList.map(weapon => (
              <DisplayImage weapInfo={weapon} key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />
            ))}
          </div>
        </div>
        <div class="buffer-grid">
          <h1 class="buffer-header">Energy</h1>
          <div class="weapons-grid">
            {eneWeapList.map(weapon => (
              <DisplayImage value={weapon} key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />
            ))}
          </div>
        </div>
        <div class="buffer-grid">
          <h1 class="buffer-header">Power</h1>
          <div class="weapons-grid">
            {powWeapList.map(weapon => (
              <DisplayImage value={weapon} key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />
            ))}
          </div>
        </div>
      </div>
      <img class="home-butt" src={images.home} onClick={() => toHome()} />

    </div>
  );
};

export default Weapons;