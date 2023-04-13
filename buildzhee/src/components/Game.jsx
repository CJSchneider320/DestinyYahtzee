import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation } from "react-router-dom";

let currBuild = {class: "", subclass: "", super: ""}

function DisplayImage(props) {
  return <img class={props.class} src={props.img} alt={props.display} />
}

//Chooses item if it is class AND subclass specific
//props: class, subclass, itemtype, typestr
function ChooseItem(props) {
  let temp = []
  props.itemtype.map((item, index) => {
    if (item.class === props.class && item.subclass === props.subclass) {
      temp.push(item)
    }
  })


  var rand = Math.floor(Math.random() * temp.length)
  currBuild[props.typestr] = temp[rand].name
  return temp[rand].name
}

//choose grenade (subclass specific, class agnostic)
//props: subclass
function ChooseGrenade(props) {
  let temp = []
  data.grenades.map((item, index) => {
    if (item.subclass === props.subclass) {
      temp.push(item)
    }
  })

  var rand = Math.floor(Math.random() * temp.length)
  currBuild["grenade"] = temp[rand].name
  return (
    <div>
      <DisplayImage class="grenade" img={temp[rand].img} display={temp[rand].display} />
      <p> Grenade: {temp[rand].display}</p>
    </div>
  )
}

function ChooseAspects(props) {
  let temp = []
  data.aspects.map((item, index) => {
    if (item.subclass === props.subclass && item.class === props.class) {
      temp.push(item)
    }
  })
  var rand1 = Math.floor(Math.random() * temp.length)
  do {
    var rand2 = Math.floor(Math.random() * temp.length)
  } while (rand1 === rand2)

  currBuild.aspects = [temp[rand1].name, temp[rand2].name]
  return (
    <div>
      <DisplayImage class="aspect" img={temp[rand1].img} display={temp[rand1].display} />
      <p> Aspect 1: {temp[rand1].display}</p>
      <DisplayImage class="aspect" img={temp[rand2].img} display={temp[rand2].display} />
      <p> Aspect 2: {temp[rand2].display}</p>
    </div>
  )
}

function ChooseFragments(props) {
  let aspects = []
  let temp = []
  let randomNumbers = []

  data.aspects.map((item, index) => {
    if (item.name == currBuild.aspects[0] || item.name == currBuild.aspects[1]) {
      aspects.push(item)
    }
  })

  data.fragments.map((item, index) => {
    if (props.subclass === item.subclass) {
      temp.push(item)
    }
  })

  var numFrag = aspects[0].fragslots + aspects[1].fragslots

  for (var i = 0; i < numFrag; i++) {
    var rand = Math.floor(Math.random() * temp.length)
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand)
    }
    else {
      i--
    }
  }

  switch (numFrag) {
    case 3:
      currBuild["fragments"] = [temp[randomNumbers[0]].name, temp[randomNumbers[1]].name, temp[randomNumbers[2]].name]
      break;
    case 4:
      currBuild["fragments"] = [temp[randomNumbers[0]].name, temp[randomNumbers[1]].name, temp[randomNumbers[2]].name, temp[randomNumbers[3]].name]
      break;
    case 5:
      currBuild["fragments"] = [temp[randomNumbers[0]].name, temp[randomNumbers[1]].name, temp[randomNumbers[2]].name, temp[randomNumbers[3]].name, temp[randomNumbers[4]].name]
      break;
  }

  return ("")
}

const Game = () => {

  const location = useLocation()

  let subclassChoice = location.state && location.state.subclass
  let classChoice = location.state && location.state.class

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

  currBuild.class = classChoice
  currBuild.subclass = subclassChoice
  return (
    <div>
      <h1>Game Page</h1>
      {data.subclasses.map((item, index) => {
        if (currBuild.subclass === item.name) {
          return (
            <div>
              <DisplayImage name={item.name} img={item.img} key={index} class="subclass" />
              <p>Subclass: {item.display}</p>
            </div>
          )
        }
      })}
      {data.classes.map((item, index) => {
        if (currBuild.class === item.name) {
          return (
            <div>
              <DisplayImage name={item.name} img={item.img} key={index} class="class" />
              <p>Class: {item.display}</p>
            </div>
          )
        }
      })}
      <ChooseItem class={currBuild.class} subclass={currBuild.subclass} itemtype={data.supers} typestr="super" />
      <ChooseItem class={currBuild.class} subclass={currBuild.subclass} itemtype={data.meeles} typestr="meele" />
      <ChooseGrenade subclass={currBuild.subclass} />
      <ChooseItem class={currBuild.class} subclass={currBuild.subclass} itemtype={data.classabil} typestr="classabil" />
      <ChooseAspects class={currBuild.class} subclass={currBuild.subclass} />
      <ChooseFragments class={currBuild.class} subclass={currBuild.subclass} />
      <br></br>
      {console.log(currBuild)}
      {console.log(currBuild.meele)}


      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default Game;