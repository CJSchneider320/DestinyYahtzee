import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation } from "react-router-dom";

function initBuild(subclassChoice, classChoice) {

  if (subclassChoice === "random") {
    var rand = Math.floor(Math.random() * 5)
    {
      data.subclasses.map((item, index) => {
        if (rand === item.id) {
          subclassChoice = item.name
        }
      })
    }
  }

  if (classChoice === "random") {
    var rand = Math.floor(Math.random() * 3)
    {
      data.classes.map((item, index) => {
        if (rand === item.id) {
          classChoice = item.name
        }
      })
    }
  }

  let ret = { class: { classChoice }, subclass: { subclassChoice } }
  //choose super
  ret.super = initItem(classChoice, subclassChoice, data.supers)

  //choose melee
  ret.melee = initItem(classChoice, subclassChoice, data.meeles)

  //choose grenade
  ret.grenade = initGrenade(subclassChoice)

  //chooice class ability
  ret.classabil = initItem(classChoice, subclassChoice, data.classabil)

  //choose aspects
  ret.aspects = initAspects(classChoice, subclassChoice)

  //choose fragments
  numFrag = ret.aspects[0] + ret.aspects[1]
  ret.fragments = initFragments(subclassChoice, numFrag)

  return ret
}

function initItem(classChoice, subclassChoice, dataSec) {
  let possItems = []
  dataSec.map((item, index) => {
    if (item.class === classChoice && item.subclass === subclassChoice) {
      possItems.push(item)
    }
  })
  var rand = Math.floor(Math.random() * possItems.length)
  return possItems[rand].name
}

function initGrenade(subclassChoice) {
  let possItems = []
  data.grenades.map((item, index) => {
    if (item.subclass === subclassChoice) {
      possItems.push(item)
    }
  })
  var rand = Math.floor(Math.random() * possItems.length)
  return possItems[rand].name
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
    if (props.subclassChoice === item.subclassChoice) {
      possItems.push(item)
    }
  })

  let randomNumbers = []
  for (var i = 0; i < numFrag; i++) {
    var rand = Math.floor(Math.random() * temp.length)
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand)
    }
    else {
      i--
    }
  }

  let initFrags = []
  for(let i = 0; i < randomNumbers.length; i++) { 
    initFrags.push(possItems[randomNumbers[i]])
  }

  return initFrags

}

function DisplayImage(props) {
  return <img class={props.class} src={props.img} alt={props.display} />
}

const Game = () => {

  const location = useLocation()

  let subclassChoice = location.state && location.state.subclass
  let classChoice = location.state && location.state.class

  const [currBuild, setBuild] = useState(initBuild(subclassChoice, classChoice))

  return (
    <div>
      <h1>Game Page</h1>
      <br></br>
      {console.log(currBuild)}
      {console.log(currBuild.meele)}


      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default Game;