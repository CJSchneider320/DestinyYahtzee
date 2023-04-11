import React from "react";
import images from '../assets';

import { Link, useLocation } from "react-router-dom";


function DisplayImage(props) {
  return <img class={props.class} src={props.img} alt={props.name}/>
}

const Game = () => {
  const data = {
    classes: [
      {id: 0, name: "titan", img: images.titan},
      {id: 1, name: "warlock", img: images.warlock},
      {id: 2, name: "hunter", img: images.hunter}
    ],
    subclasses: [
      {id: 0, name: "void", img: images.grape},
      {id: 1, name: "solar", img: images.solar},
      {id: 2, name: "arc", img: images.arc},
      {id: 3, name: "stasis", img: images.stasis},
      {id: 4, name: "strand", img: images.strand},
    ]
  }

  const location = useLocation()
  
  let subclassChoice = location.state && location.state.subclass
  let classChoice = location.state && location.state.class

  if(subclassChoice === "random") {
    var rand = Math.floor(Math.random() * 5)
    {data.subclasses.map((item, index) => {
      if(rand === item.id) {
        subclassChoice = item.name
      }
    })}
  }

  if(classChoice === "random") {
    var rand = Math.floor(Math.random() * 3)
    {data.classes.map((item, index) => {
      if(rand === item.id) {
        classChoice = item.name
      }
    })}
  }

  const finSubclass = subclassChoice
  const finClass = classChoice

  return (
    <div>
      <h1>Game Page</h1>
      {data.subclasses.map((item, index) => {
          if(finSubclass === item.name) {
            return <DisplayImage name={item.name} img={item.img} key={index} class="subclass"/>
          }
      })}
      <p>Subclass: {finSubclass}</p>
      {data.classes.map((item, index) => {
          if(finClass === item.name) {
            return <DisplayImage name={item.name} img={item.img} key={index} class="class"/>
          }
      })}
      <p>Class: {finClass}</p>
      <button><Link to="/">Home</Link></button>
    </div>
  );
};
  
export default Game;