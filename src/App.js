import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import someobject from "./aaaaaa.json";
//const data = require("./anydata.json");
import { filterByVote, createNumeralArray } from "./util.js";
import {
  StyleAPP,
  StyleButton,
  Styleh1,
  StyleBG,
  StyleBody,
  StyleYoutubeFrame,
  StyleTriggerHide,
  Stylemaibok,
  StyleButtonFrame,
} from "./style_component";

function App() {
  var obj = someobject;
  console.log(obj);
  const [url, seturl] = useState("PWbi8J1_X5Q");
  const [isHide, setIsHide] = useState(false);
  const [ind, setind] = useState(
    createNumeralArray(Object.keys(obj.vote1).length)
  );
  const [count, setcound] = useState(1);
  console.log(ind);
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

  function randomURLV2() {
    setcound((count) => (count += 1));
    var randomInd = ind[Math.floor(Math.random() * ind.length)];
    console.log("randomitem = ", randomInd);
    setind((ind) => ind.filter((ind) => ind != randomInd));
    return obj.keys[randomInd];
  }
  function filterEasy() {
    obj = filterByVote(obj);
    //console.log(obj);
  }

  return (
    <StyleAPP className="App">
      <StyleBG style={{ height: window.innerHeight }}>
        <StyleBody>
          <Styleh1>ReactGuessYoutube</Styleh1>
          <StyleYoutubeFrame>
            <StyleTriggerHide isHide={isHide}>
              <YouTube videoId={url} opts={opts} onReady={onReady} />
            </StyleTriggerHide>

            <StyleTriggerHide isHide={!isHide}>
              <Stylemaibok />
            </StyleTriggerHide>
          </StyleYoutubeFrame>

          <StyleButtonFrame>
            <Styleh1>
              {count}/{Object.keys(obj.vote1).length}
            </Styleh1>
            <StyleButton onClick={() => setIsHide(() => !isHide)}>
              toggle hide{" "}
            </StyleButton>
            <StyleButton
              onClick={() => {
                seturl(randomURLV2());
                setIsHide(() => false);
              }}
            >
              random URL{" "}
            </StyleButton>
          </StyleButtonFrame>
        </StyleBody>
      </StyleBG>
    </StyleAPP>
  );
}

export default App;
