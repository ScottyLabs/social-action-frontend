import React from "react";
function Location(props) {
  return (
    <div className="subtitle">
      <b>Location</b>: {props.address ? props.address : ""}
    </div>
  );
}
export default Location;
