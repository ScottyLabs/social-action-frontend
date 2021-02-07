import React from "react";
import Time from "./Time";
import Support from "./Support";
import { Icon, Label } from "semantic-ui-react";

import "./Overview.css";

function Overview(props) {
  /*
  e.g. props.pref = [
    ["restaurant", { name: "Restaurants", checked: false }],
    ...
  ]
  */

  const labelColorDict = {
    restaurant: "red",
    beauty: "pink",
    construction: "orange",
    education: "green",
  };

  return (
    <div className="overview">
      <Time />
      <div className="overview-body">
        <Support />
        {props.prefEntries.length === 0 ? (
          <Label key="none" size="large">
            None
          </Label>
        ) : (
          props.prefEntries.map(([pref, object]) => (
            <span className="label-margin">
              <Label tag size="large" color={labelColorDict[pref]}>
                {object.name}
                <Icon
                  name="delete"
                  onClick={() => props.handlePrefsCheck(pref, false)}
                />
              </Label>
            </span>
          ))
        )}
        <Icon name="plus circle" onClick={props.openModal} />
      </div>
    </div>
  );
}

export default Overview;
