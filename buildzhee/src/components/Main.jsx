import React from "react";
import images from '../assets';

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {

  const navigate = useNavigate();
  const [classChoice, setClass] = useState("random")
  const [subclassChoice, setSubclass] = useState("random")


  const changePage = (classChoice, subclassChoice) => {
    console.log(classChoice + " " + subclassChoice)
    navigate("/game", {
      state: { subclass: subclassChoice, class: classChoice },
    })
  };

  const onOptionClassChange = e => {
    setClass(e.target.value)
  }

  const onOptionSubclassChange = e => {
    setSubclass(e.target.value)
  }

  return (
    <div id="main-div" style={{
      backgroundImage: `url("https://d13urrra316e2f.cloudfront.net/original/3X/e/6/e62ce0beacde655aeb56b5327917513b129c50df.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <button class="login-button">
        <Link to={{ pathname: "/login" }}>
          <div class="button-img">
            <img class="button-img login-button" src={images.login} />
          </div>
        </Link>
      </button>
      <h1 class="title">Main Page</h1>
      <br></br>
      <div class="main-page">
        <div class="class-box-main column-main">
          <h1 id="class-text" for="class">  Choose Class  </h1>
          <div class="class-images">
            <div class="row">
              <label>
                <input type="radio"
                  name="classq"
                  value="random"
                  onChange={onOptionClassChange} />
                <img class="image main-class" src={images.none} alt="Random" />
              </label>
              <label>
                <input type="radio"
                  name="classq"
                  value="warlock"
                  onChange={onOptionClassChange} />
                <img class="image main-class" src={images.warlock} alt="Warlock" />
              </label>
            </div>
            <label>
              <input type="radio"
                name="classq"
                value="hunter"
                onChange={onOptionClassChange} />
              <img class="image main-class" src={images.hunter} alt="Hunter" />
            </label>
            <label>
              <input type="radio"
                name="classq"
                value="titan"
                onChange={onOptionClassChange} />
              <img class="image main-class" src={images.titan} alt="Titan" />
            </label>
          </div>
        </div>

        <div class="center-box column-main">
          <div class="row">
            <button> <Link to={{ pathname: "/weapons" }}><img class="button-img" src={images.weapons} /></Link></button>
            <button> <Link to={{ pathname: "/armor" }}> <img class="button-img" src={images.armor} /></Link></button>
            <button onClick={() => changePage(classChoice, subclassChoice)}><img class="button-img" src={images.play} /></button>
          </div>
        </div>

        <div class="subclass-box-main column-main">
          <div class="row">
            <h1 id="subclass-text" for="subclass">Choose Subclass</h1>
            <div class="subclass-images">
              <div class="row">
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="random"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.none} alt="Random" />
                </label>
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="void"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.grape} alt="Void" />
                </label>
              </div>
              <div class="row">
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="solar"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.solar} alt="Solar" />
                </label>
                <label>
                  <input type="radio"
                    name="subclassq"
                    value="arc"
                    onChange={onOptionSubclassChange} />
                  <img class="image main-subclass" src={images.arc} alt="Arc" />
                </label>
              </div>
              <label>
                <input type="radio"
                  name="subclassq"
                  value="stasis"
                  onChange={onOptionSubclassChange} />
                <img class="image main-subclass" src={images.stasis} alt="Stasis" />
              </label>
              <label>
                <input type="radio"
                  name="subclassq"
                  value="strand"
                  onChange={onOptionSubclassChange} />
                <img class="image main-subclass" src={images.strand} alt="Strand" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;