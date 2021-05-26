import React from "react";
import { Placeholder } from "semantic-ui-react";

function Tags(props) {
  return (
    <div className="subtitle">
      <b>Tags</b>:{" "}
      {props.tags ? (
        props.tags.join([', '])
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
export default Tags;
