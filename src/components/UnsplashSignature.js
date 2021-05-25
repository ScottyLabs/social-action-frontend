import React, { useEffect } from "react";
import axios from "axios";

const apiBaseURL = "https://api.unsplash.com/";
const authHeader = "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const unsplashURLSuffix = "?utm_source=pgh_keeps_tabs&utm_medium=referral";
const unsplashURL = "https://unsplash.com/" + unsplashURLSuffix;

function UnsplashSignature(props) {
  // GET RANDOM PHOTO REQUEST
  function setRandomPhotoURL() {
    axios
      .get(apiBaseURL + "photos/random?orientation=landscape", {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
        params: {
          query: "background",
        },
      })
      .then((res) => {
        console.log(res);
        props.setUnsplashRes({
          imageURL: res.data.urls.regular,
          userURL: res.data.user.links.html,
          userFullName:
            res.data.user.first_name + " " + res.data.user.last_name,
        });
        triggerDownload(res.data.id);
        return res.data.urls.regular;
      })
      .catch((err) => console.error(err));
  }

  // TRIGGER PHOTO DOWNLOAD
  function triggerDownload(photoId) {
    axios
      .get(apiBaseURL + "photos/" + photoId + "/download", {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  useEffect(setRandomPhotoURL, []);

  return (
    <div className="unsplash-mark-div">
      {props.unsplashRes && (
        <p>
          <mark className="unsplash-mark">
            Photo by{" "}
            <a className="unsplash" href={props.unsplashRes.userURL}>
              {props.unsplashRes.userFullName}
            </a>{" "}
            on{" "}
            <a className="unsplash" href={unsplashURL}>
              Unsplash
            </a>
          </mark>
        </p>
      )}
    </div>
  );
}

export default UnsplashSignature;
