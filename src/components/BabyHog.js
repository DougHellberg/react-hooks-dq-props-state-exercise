import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const [weight, setWeight] = useState(200)
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if(e.target.name==="+"){setWeight(weight+1)}
    else{setWeight(weight-1)}

    console.log(weight)
  }

function pictureRender(){
  if (props.eyeC === "blue")
    return BlueBaby
  else if (props.eyeC === "sun")
    return SunBaby
  else if (props.eyeC === "glowing")
    return GlowingBaby
  else
    return normalBaby
}

  return (
    <li className="hogbabies">
      <h1>Name:{props.name}</h1>
      <h3>Weight: {weight} lbs</h3>
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color:{props.eyeC}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={pictureRender()}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
