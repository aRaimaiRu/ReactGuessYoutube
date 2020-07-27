import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import someobject from "./anydata.json";
//const data = require("./anydata.json");
import {filterByVote} from "./util.js"
function App() {
  
  var obj = someobject
  console.log(obj)
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

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomURL() {
    const getRint = getRndInteger(0, Object.keys( obj.vote1 ).length);
 
    return obj.key[getRint];
  }

  function filterEasy(){
    obj = filterByVote(obj)
    console.log(obj)
  }

  return (
    <div className="App">
      <div style={{ display: isHide ? "block" : "none" }}>
        <YouTube videoId={url} opts={opts} onReady={onReady} />
      </div>

      <div style={{ display: !isHide ? "block" : "none" }}>
        <div style = {{backgroundColor:"Black",height:390,width:640}}></div>
      </div>

      <button onClick={() => {console.log(obj.key)}}>log data</button>
      <button onClick={() => setIsHide(() => !isHide)}>toggle hide </button>
      <button onClick={() => seturl(randomURL())}>random URL </button>
      <button onClick={() => filterEasy() }>Easy Mode </button>
    </div>
  );
}

export default App;

