import React from "react";

import { Placeholder } from "semantic-ui-react";

function Location(props) {
  return (
    <div className="subtitle">
      <b>Location</b>:{" "}
      {props.address ? (
        props.address
      ) : (
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      )}
    </div>
  );
}
export default Location;
