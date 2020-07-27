import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import someobject from "./anydata.json";
const data = require("./anydata.json");

function App() {
  const [url, seturl] = useState("PWbi8J1_X5Q");
  const [isHide, setIsHide] = useState(false);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  function log(somedata) {
    console.log(somedata);
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomURL() {
    const getRint = getRndInteger(0, 812);
    return someobject.key[getRint];
  }

  return (
    <div className="App">
      <div style={{ display: isHide ? "block" : "none" }}>
        <YouTube videoId={url} opts={opts} onReady={onReady} />
      </div>
      <button onClick={() => log(data)}>require</button>
      <button onClick={() => log(someobject)}>someobject</button>
      <button
        onClick={() => {
          log(getRndInteger(0, 800));
        }}
      >
        randomlog number
      </button>
      <button onClick={() => log(someobject.key[0])}>log data</button>
      <button onClick={() => setIsHide(() => !isHide)}>toggle hide </button>
      <button onClick={() => seturl(randomURL())}>random URL </button>
    </div>
  );
}

export default App;
