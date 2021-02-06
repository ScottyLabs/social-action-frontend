import React from "react";

function UnsplashSignature() {
  const [unsplashRes, setUnsplashRes] = React.useState(null);

  // GET RANDOM PHOTO REQUEST
  function setRandomPhotoURL() {
    return axios
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
        setUnsplashRes({
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
    <div>
      {unsplashRes && (
        <p>
          <mark className="unsplash-mark">
            Photo by{" "}
            <a className="unsplash" href={unsplashRes.userURL}>
              {unsplashRes.userFullName}
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
