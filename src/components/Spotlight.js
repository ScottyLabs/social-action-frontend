import React from "react";
import Hours from "./Hours";
import Location from "./Location";
import Tags from "./Tags";
import spotlightphoto from "../assets/spotlight-photo.jpg";

import "./Spotlight.css";

function Spotlight(props) {
  return (
    <div className="spotlight">
      <img src={spotlightphoto} className="spotlight-photo" />
      <div className="spotlight-body">
        <h2>The Corn Shack</h2>
        <Location />
        <Hours />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            commodo sollicitudin quam, sit amet ornare felis lacinia in. Duis
            non enim id lorem vestibulum fringilla. Morbi ex elit, bibendum sed
            nibh nec, lobortis dapibus arcu. Praesent finibus at purus id
            commodo. Vivamus tempus ex bibendum, laoreet tellus sed, semper
            nunc. Mauris imperdiet fermentum orci eget tincidunt. Fusce libero
            augue, sollicitudin in libero eget, pulvinar commodo nunc.
          </p>
        </div>
        <div>
          <button>Visit Website</button>
        </div>
        <Tags />
      </div>

      <div className="scroll">
        <span>Dining</span>
      </div>
    </div>
  );
}

export default Spotlight;
