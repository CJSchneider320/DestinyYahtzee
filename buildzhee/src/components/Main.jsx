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
    <div>
      <button><Link to={{ pathname: "/login" }}>Log In/Sign Up</Link></button>
      <h1>Main Page</h1>

      <label for="class">Choose Class</label>
      <br></br>
      <label>
        <input type="radio"
          name="classq"
          value="random"
          checked={classChoice === "random"}
          onChange={onOptionClassChange} />
        <img class="class" src={images.none} alt="Random" />
      </label>
      <label>
        <input type="radio"
          name="classq"
          value="warlock"
          checked={classChoice === "warlock"}
          onChange={onOptionClassChange} />
        <img class="class" src={images.warlock} alt="Warlock" />
      </label>
      <label>
        <input type="radio"
          name="classq"
          value="hunter"
          checked={classChoice === "hunter"}
          onChange={onOptionClassChange} />
        <img class="class" src={images.hunter} alt="Hunter" />
      </label>
      <label>
        <input type="radio"
          name="classq"
          value="titan"
          checked={classChoice === "titan"}
          onChange={onOptionClassChange} />
        <img class="class" src={images.titan} alt="Titan" />
      </label>

      <br></br>

      <label for="subclass">Choose Subclass</label>
      <br></br>
      <label>
        <input type="radio"
          name="subclassq"
          value="random"
          checked={subclassChoice === "random"}
          onChange={onOptionSubclassChange} />
        <img class="subclass" src={images.none} alt="Random" />
      </label>
      <label>
        <input type="radio"
          name="subclassq"
          value="void"
          checked={subclassChoice === "void"}
          onChange={onOptionSubclassChange} />
        <img class="subclass" src={images.grape} alt="Void" />
      </label>
      <label>
        <input type="radio"
          name="subclassq"
          value="solar"
          checked={subclassChoice === "solar"}
          onChange={onOptionSubclassChange} />
        <img class="subclass" src={images.solar} alt="Solar" />
      </label>
      <label>
        <input type="radio"
          name="subclassq"
          value="arc"
          checked={subclassChoice === "arc"}
          onChange={onOptionSubclassChange} />
        <img class="subclass" src={images.arc} alt="Arc" />
      </label>
      <label>
        <input type="radio"
          name="subclassq"
          value="stasis"
          checked={subclassChoice === "stasis"}
          onChange={onOptionSubclassChange} />
        <img class="subclass" src={images.stasis} alt="Stasis" />
      </label>
      <label>
        <input type="radio"
          name="subclassq"
          value="strand"
          checked={subclassChoice === "strand"}
          onChange={onOptionSubclassChange} />
        <img class="subclass" src={images.strand} alt="Strand" />
      </label>

      <br></br>
      <br></br>

      <p>{subclassChoice} {classChoice}</p>
      
      <button onClick={() => changePage(classChoice, subclassChoice)}>Play</button>

    </div>
  );
};

export default Main;