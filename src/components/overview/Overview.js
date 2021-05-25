import React from "react";
import Time from "./Time";
import { Icon, Label, List } from "semantic-ui-react";

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
        <h2>I'm looking to support minority-owned businesses in...</h2>
        <List horizontal className="list-horizontal">
          {props.prefEntries.map(([pref, object]) => (
            <List.Item key={`list_item_${pref}`}>
              <Label
                tag
                size="large"
                color={labelColorDict[pref]}
                key={`label_tag_${pref}`}
              >
                {object.name}
                <Icon
                  name="delete"
                  onClick={() => props.handlePrefsCheck(pref, false)}
                  key={`list_item_icon_${pref}`}
                />
              </Label>
            </List.Item>
          ))}

          <List.Item>
            <Icon name="plus circle" onClick={props.openModal} />
          </List.Item>
        </List>
      </div>
    </div>
  );
}

export default Overview;
