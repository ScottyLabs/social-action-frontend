import React from "react";
// import Hours from "./Hours";
import Location from "./Location";
import Tags from "./Tags";
import spotlightphoto from "../../assets/spotlight-photo.jpg";
import { Placeholder } from "semantic-ui-react";

import axios from "axios";

import "./Spotlight.css";

const mongoDBApiUrl = "https://social-action-backend.herokuapp.com/api";

function Spotlight() {
  const [bus, setBus] = React.useState({});

  React.useEffect(() => {
    axios
      .get(mongoDBApiUrl)
      .then((res) => {
        console.log(res);
        setBus(res.data.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="spotlight">
      <img src={spotlightphoto} className="spotlight-photo" />
      <div className="spotlight-body">
        {bus.firm_name ? (
          <h2>{bus.firm_name}</h2>
        ) : (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        )}
        <Location address={bus.physical_address} />
        {/* <Hours /> */}
        <div>
          <p>
            <b>Description</b>:{" "}
            {bus.work_description ? (
              bus.work_description
            ) : (
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            )}
          </p>
        </div>
        {bus.website && (
          <div>
            <button onClick={() => window.open(bus.website)}>
              Visit Website
            </button>
          </div>
        )}
        <Tags tags={bus.categories} />
      </div>

      <div className="scroll">
        <span>Owners: {bus.owners}</span>
      </div>
    </div>
  );
}

export default Spotlight;
