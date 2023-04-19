import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function DisplayImage(props) {
  return (
    <label class="exotic-weapons">
      <input type="checkbox"
        name={props.name}
        class="weaponCheckbox"
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

  const [weapList, setWeapList] = useState(data.weapons);
  const [kinWeapList, setKinWeapList] = useState(initList("Kinetic"));
  const [eneWeapList, setEneWeapList] = useState(initList("Energy"));
  const [powWeapList, setPowWeapList] = useState(initList("Heavy"));
  console.log(weapList)

  const toHome = () => {
    navigate("/")
  }

  return (
    <div id="main-div">
      <img class="title-image" src={images.title} />
      <div class="conf-buttons-grid">
        <img class="conf-butt" src={images.selall} onClick={() => selectAll()} />
        <img class="conf-butt" src={images.deselall} onClick={() => deselectAll()} />
        <img class="conf-butt" src={images.confirm} />
      </div>
      <div class="mega-weapons-grid">
        <div class="buffer-grid">
        <h1 class="buffer-header">Kinetic</h1>
          <div class="weapons-grid">
            {kinWeapList.map(weapon => (
              <DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />
            ))}
          </div>
        </div>
        <div class="buffer-grid">
        <h1 class="buffer-header">Energy</h1>
          <div class="weapons-grid">
            {eneWeapList.map(weapon => (
              <DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />
            ))}
          </div>
        </div>
        <div class="buffer-grid">
          <h1 class="buffer-header">Power</h1>
          <div class="weapons-grid">
            {powWeapList.map(weapon => (
              <DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />
            ))}
          </div>
        </div>
      </div>
      <img class="home-butt" src={images.home} onClick={() => toHome()} />

    </div>
  );
};

export default Weapons;