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

const Armor = () => {

  const navigate = useNavigate();

  const [armorList, setArmorList] = useState(data.armors);

  const toHome = () => {
    navigate("/")
  }

  return (
    <div id="main-div">
      <img class="title-image" src={images.title} />
      <div class="conf-buttons-grid">
        <img class="conf-butt" src={images.selall} onClick={() => selectAll()}/>
        <img class="conf-butt" src={images.deselall} onClick={() => deselectAll()} />
        <img class="conf-butt" src={images.confirm} />
      </div>
      <div class="weapons-grid">
        {armorList.map(armor => (
          <DisplayImage key={armor.name} name={armor.name} display={armor.display} img={armor.img} />
        ))}
      </div>
      <img class="home-butt" src={images.home} onClick={() => toHome()} />
    </div>
  );
};
  
export default Armor;