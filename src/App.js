import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import someobject from "./aaaaaa.json";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import all_vn from "./all_vn.json"

//const data = require("./anydata.json");

import { filterByVote, createNumeralArray,jsonObjectTolist ,uniqueArray} from "./util.js";
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
  Frametop,
  Frameright,
  FrameBottom,
  FrameLeft,
  TopRightTriangle,
  BottomLeftTriangle,
} from "./style_component";

function App() {
  var quaryData = all_vn;
  console.log(quaryData)
  var obj = someobject;
  // console.log(obj);
  const [url, seturl] = useState("PWbi8J1_X5Q");
  const [isHide, setIsHide] = useState(false);
  const [ind, setind] = useState(
    createNumeralArray(Object.keys(obj.vote1).length)
  );
  const [count, setcound] = useState(1);
  // console.log(ind);
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
      <Frametop></Frametop>
      <Frameright></Frameright>
      <FrameLeft></FrameLeft>
      <FrameBottom></FrameBottom>

      <TopRightTriangle>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="160">
          <line
            x1="0"
            y1="0"
            x2="75"
            y2="160"
            stroke="#b6b6b6"
            stroke-width="6"
          ></line>
          <polygon points="0, 0 75, 0 75, 160 0, 0" fill="#b6da3e"></polygon>
        </svg>
      </TopRightTriangle>
      <BottomLeftTriangle>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="160">
          <line
            x1="0"
            y1="0"
            x2="75"
            y2="160"
            stroke="#b6b6b6"
            stroke-width="6"
          ></line>
          <polygon points="0, 0 0, 160 75, 160 0, 0" fill="#b6da3e"></polygon>
        </svg>
      </BottomLeftTriangle>

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

            <Autocomplete
        id="free-solo-demo"
        
        options={uniqueArray(jsonObjectTolist(quaryData.name_romanji))}
        renderInput={(params) => (
          <TextField {...params} label="input" margin="normal" variant="outlined"  autoComplete='off' />
        )}
      />


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
