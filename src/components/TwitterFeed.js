import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

function TwitterFeed() {
  useScript("https://platform.twitter.com/widgets.js");
  return (
    <a
      className="twitter-timeline"
      href="https://twitter.com/MobsSupport?ref_src=twsrc%5Etfw"
    >
      Tweets by @MobsSupport
    </a>
  );
}

export default TwitterFeed;
