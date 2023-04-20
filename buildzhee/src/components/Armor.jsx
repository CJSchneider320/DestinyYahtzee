import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function DisplayImage(props) {
  return (
    <label class="exotic-armor">
      <input type="checkbox"
        name={props.name}
        class="armorCheckbox"
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
  var checkboxes = document.getElementsByClassName("armorCheckbox")
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true
  }
}

function deselectAll() {
  console.log("hello")
  var checkboxes = document.getElementsByClassName("armorCheckbox")
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false
  }
}

function initList(currClass) {
  var temp = []
  data.armors.map((item, index) => {
    if (item.class === currClass) {
      temp.push(item)
    }
  })

  console.log(temp)
  return temp
}


const Armor = () => {

  const navigate = useNavigate();

  const [armorList, setArmorList] = useState(data.armors);

  const [titanArmor, setTitanArmor] = useState(initList("titan"))
  const [hunterArmor, setHunterArmor] = useState(initList("hunter"))
  const [warlockArmor, setWarlockArmor] = useState(initList("warlock"))

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
          <h1 class="buffer-header">Titan</h1>
          <div class="weapons-grid">
            {titanArmor.map(weapon => {
              if (weapon.type === "Helmet") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {titanArmor.map(weapon => {
              if (weapon.type === "Gauntlets") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {titanArmor.map(weapon => {
              if (weapon.type === "Chestpiece") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {titanArmor.map(weapon => {
              if (weapon.type === "Boots") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
          </div>
        </div>
        <div class="buffer-grid">
          <h1 class="buffer-header">Hunter</h1>
          <div class="weapons-grid">
            {hunterArmor.map(weapon => {
              if (weapon.type === "Helmet") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {hunterArmor.map(weapon => {
              if (weapon.type === "Gauntlets") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {hunterArmor.map(weapon => {
              if (weapon.type === "Chestpiece") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {hunterArmor.map(weapon => {
              if (weapon.type === "Boots") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
          </div>
        </div>
        <div class="buffer-grid">
          <h1 class="buffer-header">Warlock</h1>
          <div class="weapons-grid">
            {warlockArmor.map(weapon => {
              if (weapon.type === "Helmet") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {warlockArmor.map(weapon => {
              if (weapon.type === "Gauntlets") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {warlockArmor.map(weapon => {
              if (weapon.type === "Chestpiece") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
            {warlockArmor.map(weapon => {
              if (weapon.type === "Boots") {
                return (<DisplayImage key={weapon.name} name={weapon.name} display={weapon.display} img={weapon.img} />)
              }
            })}
          </div>
        </div>
      </div>
      <img class="home-butt" src={images.home} onClick={() => toHome()} />
    </div>
  );
};

export default Armor;