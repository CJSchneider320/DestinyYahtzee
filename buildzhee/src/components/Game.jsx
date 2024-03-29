import React from "react";
import images from '../assets';
import data from "./data"
import {initBuild, initSelList} from "./GameFunctions.js"

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase, ref, get, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseConfig"


function DisplayImage(props) {
  if (props.class === "class" || props.class === "subclass") {
    return <img
      class={props.class}
      src={props.img}
      alt={props.display}
      onMouseEnter={() => displayInfo(props.display)}
      onMouseLeave={() => removeInfo()} />
  }

  return (
    <label class={props.class}>
      <input type="checkbox"
        name={props.name}
        data-key={props.class}
        class="buildCheckbox"
        value={1}
        onChange={(e) => {
          if (e.target.checked) {
            props.onCheck(e)
          }
          else {
            props.onDecheck(e)
          }
        }

        }

      />
      <img
        class={"image " + props.class}
        src={props.img}
        alt={props.display}
        onMouseEnter={() => displayInfo(props.display)}
        onMouseLeave={() => removeInfo()} />
    </label>
  )
}

function DisplayItems(props) {
  return (
    <div id="mega-grid" class="mega-grid">
      {/* class */}
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="class" name={props.build.class.name} img={props.build.class.img} display={props.build.class.display} />
      {/* subclass */}
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="subclass" name={props.build.subclass.name} img={props.build.subclass.img} display={props.build.subclass.display} />
      {/* super, grenade, melee */}
      <div class="super-box">
        <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="super" name={props.build.super.name} img={props.build.super.img} display={props.build.super.display} />
      </div>
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="grenade" name={props.build.grenade.name} img={props.build.grenade.img} display={props.build.grenade.display} />
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="melee" name={props.build.melee.name} img={props.build.melee.img} display={props.build.melee.display} />
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="classabil" name={props.build.classabil.name} img={props.build.classabil.img} display={props.build.classabil.display} />
      {/* aspects */}
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="aspect0" name={props.build.aspects[0].name} img={props.build.aspects[0].img} display={props.build.aspects[0].display} />
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="aspect1" name={props.build.aspects[1].name} img={props.build.aspects[1].img} display={props.build.aspects[1].display} />
      {/* fragments */}
      {props.build.fragments.map((item, index) => {
        return (
          <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class={"fragment" + index} name={item.name} img={item.img} display={item.display} />
        )
      })}
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="weapon" name={props.build.weapon.name} img={props.build.weapon.img} display={props.build.weapon.display} />
      <DisplayImage setShowInfo={props.setShowInfo} onCheck={props.onCheck} onDecheck={props.onDecheck} class="armor" name={props.build.armor.name} img={props.build.armor.img} display={props.build.armor.display} />
    </div>
  )

}

function rerollItem(dclass, dsubclass, oldItem, key) {
  let temp = []
  data[key].map((item, index) => {
    if (item.class === dclass && item.subclass === dsubclass && item !== oldItem) {
      temp.push(item)
    }
  })
  if (temp.length === 0) {
    return oldItem
  }

  let rand = Math.floor(Math.random() * temp.length)
  return temp[rand]
}

function rerollWeapon(oldItem, key, weapList) {
  let temp = []
  data[key].map((item, index) => {
    if (weapList.includes(item.name) && item != oldItem)
      temp.push(item)
  })

  if (temp.length === 0) {
    return oldItem
  }

  let rand = Math.floor(Math.random() * temp.length)
  return temp[rand]
}

function rerollArmor(dclass, dsubclass, oldItem, key, armorList) {
  let possItems = []
  data[key].map((item, index) => {
    if (item.class == dclass && (item.subclass.includes(dsubclass) || item.subclass.includes("all")) && armorList.includes(item.name) && item != oldItem) {
      possItems.push(item)
    }
  })
  if (possItems.length === 0) {
    return oldItem
  }

  var rand = Math.floor(Math.random() * possItems.length)
  return possItems[rand]
}

function rerollGrenade(dclass, dsubclass, oldItem, key) {
  let temp = []
  data[key].map((item, index) => {
    if (item.subclass === dsubclass && item !== oldItem) {
      temp.push(item)
    }
  })

  let rand = Math.floor(Math.random() * temp.length)
  return temp[rand]
}

function rerollAspect(dclass, dsubclass, asp1, asp2, key) {
  let temp = []
  data[key].map((item, index) => {
    if (item.class === dclass && item.subclass === dsubclass && item !== asp1 && item !== asp2) {
      temp.push(item)
    }
  })

  if (temp.length === 0) {
    return asp1
  }

  let rand = Math.floor(Math.random() * temp.length)
  return temp[rand]
}

function rerollFragment(dclass, dsubclass, fraglist, key) {
  let temp = []
  data[key].map((item, index) => {
    if (item.subclass === dsubclass && !fraglist.includes(item)) {
      temp.push(item)
    }
  })

  let rand = Math.floor(Math.random() * temp.length)
  return temp[rand]
}

function displayInfo(itemName) {
  document.getElementById("info-item").innerHTML = itemName
}

function removeInfo() {
  document.getElementById("info-item").innerHTML = ""
}


const Game = () => {

  const location = useLocation()
  const navigate = useNavigate();

  let subclassChoice = location.state && location.state.subclass
  let classChoice = location.state && location.state.class
  let weapList = location.state && location.state.weapons
  let armorList = location.state && location.state.armor

  console.log(weapList)
  console.log(armorList)

  const [currBuild, setBuild] = useState(initBuild(subclassChoice, classChoice, weapList, armorList))
  console.log(currBuild)
  const [itemsSel, setItemsSel] = useState(initSelList(currBuild))

  const [rerollPoints, setRerollPoints] = useState(15)
  const [numSel, setNumSel] = useState(0)

  const [showInfo, setShowInfo] = useState(false);

  const [userId, setUserId] = useState(location.search.split("=")[1])

  const auth = getAuth();
  const user = auth.currentUser;

  const onCheck = e => {
    var usekey = e.target.dataset.key
    setNumSel(numSel + (parseInt(e.target.value)))
    if (e.target.dataset.key.substring(0, 6) === "aspect") {
      const newItemsSel = { ...itemsSel };

      const index = e.target.dataset.key.substring(6, 7);

      newItemsSel.aspects = [...itemsSel.aspects];
      newItemsSel.aspects[index] = true;

      setItemsSel(newItemsSel);
    }
    else if (e.target.dataset.key.substring(0, 8) === "fragment") {
      const newItemsSel = { ...itemsSel };

      const index = e.target.dataset.key.substring(8, 9);

      newItemsSel.fragments = [...itemsSel.fragments];
      newItemsSel.fragments[index] = true;

      setItemsSel(newItemsSel);
    }
    else {
      setItemsSel({ ...itemsSel, [e.target.dataset.key]: true })
    }
  }

  const onDecheck = e => {
    setNumSel(numSel - (parseInt(e.target.value)))
    if (e.target.dataset.key.substring(0, 6) === "aspect") {
      const newItemsSel = { ...itemsSel };

      const index = e.target.dataset.key.substring(6, 7);

      newItemsSel.aspects = [...itemsSel.aspects];
      newItemsSel.aspects[index] = false;

      setItemsSel(newItemsSel);
    }
    else if (e.target.dataset.key.substring(0, 8) === "fragment") {
      const newItemsSel = { ...itemsSel };

      const index = e.target.dataset.key.substring(8, 9);

      newItemsSel.fragments = [...itemsSel.fragments];
      newItemsSel.fragments[index] = false;

      setItemsSel(newItemsSel);
    }
    else {
      setItemsSel({ ...itemsSel, [e.target.dataset.key]: false })
    }
  }

  function rerollSelected() {
    console.log("hello")
    if (rerollPoints < numSel) {
      document.getElementById("noPoints").innerHTML = "Not enough points remaining"
      return
    }
    document.getElementById("noPoints").innerHTML = ""
    const newCurrBuild = { ...currBuild }
    const newItemsSel = { ...itemsSel }
    const entries = Object.entries(newItemsSel)
    for (const [key, value] of entries) {
      if (key === "aspects") {
        if (value[0] === true) {
          newCurrBuild.aspects[0] = rerollAspect(currBuild.class.name, currBuild.subclass.name, currBuild.aspects[0], currBuild.aspects[1], key)
          newItemsSel.aspects[0] = false
        }
        if (value[1] === true) {
          newCurrBuild.aspects[1] = rerollAspect(currBuild.class.name, currBuild.subclass.name, currBuild.aspects[1], currBuild.aspects[0], key)
          newItemsSel.aspects[1] = false
        }

        if (newCurrBuild.aspects[0].fragslots + newCurrBuild.aspects[1].fragslots > newCurrBuild.fragments.length) {
          var rollNum = newCurrBuild.aspects[0].fragslots + newCurrBuild.aspects[1].fragslots - newCurrBuild.fragments.length
          for (let i = 0; i < rollNum; i++)
            newCurrBuild.fragments.push(rerollFragment(currBuild.class.name, currBuild.subclass.name, currBuild.fragments, "fragments"))
        }
        else if (newCurrBuild.aspects[0].fragslots + newCurrBuild.aspects[1].fragslots < newCurrBuild.fragments.length) {
          var rollNum = newCurrBuild.fragments.length - (newCurrBuild.aspects[0].fragslots + newCurrBuild.aspects[1].fragslots)
          for (let i = 0; i < rollNum; i++) {
            newCurrBuild.fragments.pop()
          }
        }
      } else if (key === "fragments") {
        for (let i = 0; i < value.length; i++) {
          if (value[i] === true) {
            newCurrBuild.fragments[i] = rerollFragment(currBuild.class.name, currBuild.subclass.name, currBuild.fragments, key)
            newItemsSel.fragments[i] = false
          }
        }
      }
      else if (value === true) {
        if (key === "grenade") {
          newCurrBuild[key] = rerollGrenade(currBuild.class.name, currBuild.subclass.name, currBuild[key], key + "s")
          newItemsSel[key] = false
        }
        else if (key === "weapon") {
          newCurrBuild[key] = rerollWeapon(currBuild[key], key + "s", weapList)
          newItemsSel[key] = false
        }
        else if (key === "armor") {
          newCurrBuild[key] = rerollArmor(currBuild.class.name, currBuild.subclass.name, currBuild[key], key + "s", armorList)
          newItemsSel[key] = false
        }
        else {
          if (key === "classabil") {
            newCurrBuild[key] = rerollItem(currBuild.class.name, currBuild.subclass.name, currBuild[key], key)
            newItemsSel[key] = false
          }
          else {
            newCurrBuild[key] = rerollItem(currBuild.class.name, currBuild.subclass.name, currBuild[key], key + "s")
            newItemsSel[key] = false

          }
        }
      }

    }
    setBuild(newCurrBuild)
    setItemsSel(newItemsSel)
    setRerollPoints(rerollPoints - numSel)
    setNumSel(0)
    var checkboxes = document.getElementsByClassName("buildCheckbox")
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false
    }

  }

  const toHome = () => {
    if (user)
      navigate(`/?uid=${user.uid}`)
    else
    navigate(`/`)
  }

  return (
    <div id="main-div">
      <img class="title-image-game" src={images.title} />
      <div class="mega-grid-out">
        <DisplayItems setShowInfo={setShowInfo} build={currBuild} onCheck={onCheck} onDecheck={onDecheck} />
        <div class="info-page">
          <h2 id="info-item" class="info-item-name"></h2>
        </div>
        <div class="reroll-count-box">
          <h2 class="reroll-text-1">Reroll Points Remaining: {rerollPoints}</h2>
          <h3 class="reroll-text-2">Points to be Spent: {numSel}</h3>
          <h3 id="noPoints" class="no-reroll-text"></h3>
        </div>
        <img class="reroll-button" src={images.reroll} onClick={() => rerollSelected()} />
      </div>
      <img class="home-butt" src={images.home} onClick={() => toHome()} />

    </div>
  );
};

export default Game;