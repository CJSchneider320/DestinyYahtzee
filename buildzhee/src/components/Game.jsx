import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase, ref, get, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseConfig"

function initBuild(subclassChoice, classChoice, weapList) {

  if (subclassChoice === "random") {
    var rand = Math.floor(Math.random() * 5)
    {
      data.subclasses.map((item, index) => {
        if (rand === item.id) {
          subclassChoice = item
        }
      })
    }
  }
  else {
    data.subclasses.map((item, index) => {
      if (subclassChoice === item.name) {
        subclassChoice = item
      }
    })
  }

  if (classChoice === "random") {
    var rand = Math.floor(Math.random() * 3)
    {
      data.classes.map((item, index) => {
        if (rand === item.id) {
          classChoice = item
        }
      })
    }
  }
  else {
    data.classes.map((item, index) => {
      if (classChoice === item.name) {
        classChoice = item
      }
    })
  }

  let ret = {}

  ret.subclass = subclassChoice
  ret.class = classChoice

  //choose super
  ret.super = initItem(classChoice.name, subclassChoice.name, data.supers)

  //choose melee
  ret.melee = initItem(classChoice.name, subclassChoice.name, data.melees)

  //choose grenade
  ret.grenade = initGrenade(subclassChoice.name)

  //chooice class ability
  ret.classabil = initItem(classChoice.name, subclassChoice.name, data.classabil)

  //choose aspects
  ret.aspects = initAspects(classChoice.name, subclassChoice.name)

  //choose fragments
  let numFrag = ret.aspects[0].fragslots + ret.aspects[1].fragslots
  ret.fragments = initFragments(subclassChoice.name, numFrag)

  //choose weapon
  ret.weapon = initWeapon(weapList)

  //choose armor
  ret.armor = initArmor(classChoice.name, subclassChoice.name)

  return ret
}

function initSelList(currBuild) {

  var temp = []
  var fragslotsTotal = currBuild.aspects[0].fragslots + currBuild.aspects[1].fragslots
  for (let i = 0; i < fragslotsTotal; i++) {
    temp.push(false)
  }

  return {
    class: false,
    subclass: false,
    super: false,
    melee: false,
    grenade: false,
    classabil: false,
    aspects: [false, false],
    fragments: temp,
    weapon: false,
    armor: false
  }

}

function initItem(classChoice, subclassChoice, dataSec) {
  let possItems = []
  dataSec.map((item, index) => {
    if (item.class === classChoice && item.subclass === subclassChoice) {
      possItems.push(item)
    }
  })
  var rand = Math.floor(Math.random() * possItems.length)
  return possItems[rand]
}

function initWeapon(weapList) {
  let possItems = []
  data.weapons.map((item, index) => {
    if (weapList.includes(item))
      possItems.push(item)
  })

  var rand = Math.floor(Math.random() * possItems.length)
  return possItems[rand]
}

function initArmor(classChoice, subclassChoice) {
  let possItems = []
  data.armors.map((item, index) => {
    if (item.class == classChoice && item.subclass.includes(subclassChoice)) {
      possItems.push(item)
    }
  })

  var rand = Math.floor(Math.random() * possItems.length)
  if (possItems.length == 0) {
    return "hello"
  }
  return possItems[rand]
}

function initGrenade(subclassChoice) {
  let possItems = []
  data.grenades.map((item, index) => {
    if (item.subclass === subclassChoice) {
      possItems.push(item)
    }
  })
  var rand = Math.floor(Math.random() * possItems.length)
  return possItems[rand]
}

function initAspects(classChoice, subclassChoice) {
  let possItems = []
  data.aspects.map((item, index) => {
    if (item.class === classChoice && item.subclass === subclassChoice) {
      possItems.push(item)
    }
  })

  var rand1 = Math.floor(Math.random() * possItems.length)
  do {
    var rand2 = Math.floor(Math.random() * possItems.length)
  } while (rand1 === rand2)
  return [possItems[rand1], possItems[rand2]]
}

function initFragments(subclassChoice, numFrag) {
  let possItems = []
  data.fragments.map((item, index) => {
    if (subclassChoice === item.subclass) {
      possItems.push(item)
    }
  })

  let randomNumbers = []
  for (var i = 0; i < numFrag; i++) {
    var rand = Math.floor(Math.random() * possItems.length)
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand)
    }
    else {
      i--
    }
  }

  let initFrags = []
  for (let i = 0; i < randomNumbers.length; i++) {
    initFrags.push(possItems[randomNumbers[i]])
  }

  return initFrags

}

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

function rerollWeapon(oldItem, key) {
  let temp = []
  data[key].map((item, index) => {
    temp.push(item)
  })

  let rand = Math.floor(Math.random() * temp.length)
  return temp[rand]
}

function rerollArmor(dclass, dsubclass, oldItem, key) {
  let possItems = []
  data[key].map((item, index) => {
    if (item.class == dclass && (item.subclass.includes(dsubclass) || item.subclass.includes("all"))) {
      possItems.push(item)
    }
  })

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

async function initWeapList(userId) {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return (docSnap.data().weapons);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

const Game = () => {

  const location = useLocation()
  const navigate = useNavigate();

  let subclassChoice = location.state && location.state.subclass
  let classChoice = location.state && location.state.class

  const [userId, setUserId] = useState(location.search.split("=")[1])

  const auth = getAuth();
  const user = auth.currentUser;

  const [weapList, setWeapList] = useState()

  useEffect(() => {
    const fetchWeapList = async () => {
      const list = await initWeapList(userId);
      setWeapList(list);
    };
    fetchWeapList();
  }, []);

  console.log(weapList)

  const [armorList, setArmorList] = useState()

  const [currBuild, setBuild] = useState()
  useEffect(() => {
    if (weapList) {
      setBuild(initBuild(subclassChoice, classChoice, weapList))
    }
  }, [subclassChoice, classChoice, weapList])
  console.log(currBuild)
  const [itemsSel, setItemsSel] = useState(initSelList(currBuild))

  const [rerollPoints, setRerollPoints] = useState(15)
  const [numSel, setNumSel] = useState(0)

  const [showInfo, setShowInfo] = useState(false);

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
          newCurrBuild[key] = rerollWeapon(currBuild[key], key + "s")
          newItemsSel[key] = false
        }
        else if (key === "armor") {
          newCurrBuild[key] = rerollArmor(currBuild.class.name, currBuild.subclass.name, currBuild[key], key + "s")
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
    navigate(`/?uid=${user.uid}`)
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