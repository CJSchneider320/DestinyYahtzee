import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

var numSel = 0;

function initBuild(subclassChoice, classChoice) {

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
  return (
    <label>
      <input type="checkbox"
        name={props.name}
        value={1}
        onChange={(event) => {
          if (event.target.checked) {
            props.onCheck()
          }
          else {
            props.onDecheck()
          }
        }

        }

      />
      <img class={props.class} src={props.img} alt={props.display} />
    </label>
  )
}

function DisplayItems(props) {
  return (
    <div>
      {/* class */}
      <div class="row">
        <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="class" name={props.build.class.name} img={props.build.class.img} display={props.build.class.display} />
      </div>
      {/* subclass */}
      <div class="row">
        <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="subclass" name={props.build.subclass.name} img={props.build.subclass.img} display={props.build.subclass.display} />
      </div>
      {/* super, grenade, melee */}
      <div class="row">
        <div class="column">
          <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="super" name={props.build.super.name} img={props.build.super.img} display={props.build.super.display} />
        </div>
        <div class="column">
          <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="grenade" name={props.build.grenade.name} img={props.build.grenade.img} display={props.build.grenade.display} />
        </div>
        <div class="column">
          <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="melee" name={props.build.melee.name} img={props.build.melee.img} display={props.build.melee.display} />
        </div>
        <div class="column">
          <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="classabil" name={props.build.classabil.name} img={props.build.classabil.img} display={props.build.classabil.display} />
        </div>
      </div>
      {/* aspects */}
      <div class="row">
        <div class="column">
          <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="aspect" name={props.build.aspects[0].name} img={props.build.aspects[0].img} display={props.build.aspects[0].display} />
        </div>
        <div class="column">
          <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="aspect" name={props.build.aspects[1].name} img={props.build.aspects[1].img} display={props.build.aspects[1].display} />
        </div>
      </div>
      {/* fragments */}
      <div class="row">
        {props.build.fragments.map((item, index) => {
          return (
            <div class="column">
              <DisplayImage onCheck={props.onCheck} onDecheck={props.onDecheck} class="fragment" name={item.name} img={item.img} display={item.display} />
            </div>
          )
        })}
      </div>
    </div>
  )

}

const Game = () => {

  const location = useLocation()

  let subclassChoice = location.state && location.state.subclass
  let classChoice = location.state && location.state.class

  const [currBuild, setBuild] = useState(initBuild(subclassChoice, classChoice))
  const [rerollPoints, setRerollPoints] = useState(20)

  const onCheck = e => {
    setRerollPoints(rerollPoints - (event.target.value))
  }

  const onDecheck = e => {
    setRerollPoints(rerollPoints + (event.target.value))
  }
  return (
    <div>
      <h1>Game Page</h1>
      <h2>Reroll Points: {rerollPoints}</h2>
      <br></br>
      <DisplayItems build={currBuild} onCheck={onCheck} onDecheck={onDecheck} />



      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default Game;