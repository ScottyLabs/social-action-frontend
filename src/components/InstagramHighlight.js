import React from "react";

function InstagramHighlight(props) {
  const url = props.url ? props.url : "CHSXPttJvtc";
  const srcURL =
    "https://www.instagram.com/p/" +
    url +
    "/embed?utm_source=ig_embedembed/captioned/";
  return (
    <div>
      <iframe
        id="instagram-embed-0"
        title="instagram-embed-0"
        style={{
          background: "white",
          maxWidth: "658px",
          width: "300px",
          borderRadius: "3px",
          border: "1px solid #dbdbdb",
          boxShadow: "none",
          display: "block",
          margin: "0px 0px 12px",
          minWidth: "300px",
          padding: "0px",
        }}
        src={srcURL}
        scrolling="no"
        data-instgrm-payload-id="instagram-media-payload-0"
        height="395"
        frameBorder="0"
      />
    </div>
  );
}

export default InstagramHighlight;
