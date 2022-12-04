// import animals from "./data";

// console.log(animals);

// const [cat, dog] = animals;
// //this is the same as var cat = animals[0]
// // therefore destrturing an array

// const {name, sound} = cat;
// //Destructuring an onject
// //same as cta.name and cat.sound

// //can change names by
// //const {name: catName, sound: catSound} = cat;

// //can give cutsome values by
// ///=const {name = "Fluffy", sound = "prr"} = cat;

// //const {name, sound, feedingRequirements: {food, water}} = cat;
// //for nested array destrtcuring it again and taking out the objects in the nested array

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
