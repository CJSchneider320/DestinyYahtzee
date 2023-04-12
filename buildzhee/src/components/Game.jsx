import React from "react";
import images from '../assets';
import data from "./data"

import { Link, useLocation } from "react-router-dom";


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

  let rand = Math.floor(Math.random() * temp.length)
  return (
    <div>
      <DisplayImage class={props.typestr} img={temp[rand].img} display={temp[rand].display} />
      <p>{props.typestr.charAt(0).toUpperCase() + props.typestr.slice(1)}: {temp[rand].display}</p>
    </div>
  )
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

  let rand = Math.floor(Math.random() * temp.length)
  return (
    <div>
      <DisplayImage class="grenade" img={temp[rand].img} display={temp[rand].display} />
      <p> Grenade: {temp[rand].display}</p>
    </div>
  )
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

  const finSubclass = subclassChoice
  const finClass = classChoice

  return (
    <div>
      <h1>Game Page</h1>
      {data.subclasses.map((item, index) => {
        if (finSubclass === item.name) {
          return (
            <div>
              <DisplayImage name={item.name} img={item.img} key={index} class="subclass" />
              <p>Subclass: {item.display}</p>
            </div>
          )
        }
      })}
      {data.classes.map((item, index) => {
        if (finClass === item.name) {
          return (
            <div>
              <DisplayImage name={item.name} img={item.img} key={index} class="class" />
              <p>Class: {item.display}</p>
            </div>
          )
        }
      })}
      <ChooseItem class={finClass} subclass={finSubclass} itemtype={data.supers} typestr="super"/>
      <ChooseItem class={finClass} subclass={finSubclass} itemtype={data.meeles} typestr="meele"/>
      <ChooseGrenade subclass={finSubclass}/>
      <ChooseItem class={finClass} subclass={finSubclass} itemtype={data.classabil} typestr="classabil"/>


      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default Game;