import React from "react";
import Time from "./Time";
import Support from "./Support";
import { Icon, Label } from "semantic-ui-react";

import "./Overview.css";

function Overview(props) {
  const labelColorDict = {
    Restaurants: "red",
    Beauty: "pink",
    Construction: "orange",
    Education: "green",
  };

  const [preferences, setPreferences] = React.useState([
    "Restaurants",
    "Beauty",
  ]);

  const removePref = (pref) => {
    let newPreferences = [...preferences];
    newPreferences = newPreferences.filter((e) => e !== pref);
    setPreferences(newPreferences);
  };

  return (
    <div className="overview">
      <Time />
      <div className="overview-body">
        <Support />
        {preferences.length === 0 ? (
          <Label key="none" size="large">
            None
          </Label>
        ) : (
          preferences.map((pref) => (
            <Label as="a" tag size="large" color={labelColorDict[pref]}>
              {pref}
              <Icon name="delete" onClick={() => removePref(pref)} />
            </Label>
          ))
        )}
      </div>
    </div>
  );
}

export default Overview;
