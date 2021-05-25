import React from "react";
function Tags(props) {
  return (
    <div className="subtitle">
      <b>Tags</b>: {props.tags ? props.tags.join([', ']) : ""}
    </div>
  );
}
export default Tags;
