import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import someobject from "./aaaaaa.json";
//const data = require("./anydata.json");
import { filterByVote, createNumeralArray } from "./util.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Background from "./unknown.png";
import styled from "styled-components";

const StyleAPP = styled.div`
  background-color: #eef5fa;
  font-family: Comfortaa;
`;
const StyleButton = styled(Button)`
  margin: 20;
  font-family: Comfortaa;
`;
const Styleh1 = styled.h1`
  text-align: center;
  color: #719cad;
`;
const StyleBG = styled.div`
  background-image: url(${Background});
  height: ${(props) => props.Height};
  background-size: cover;
`;
const StyleBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;
const StyleYoutubeFrame = styled.div`
  margin: auto;
  padding: 20;
`;
const StyleTriggerHide = styled.div`
  display: ${(props) => (props.isHide ? "block" : "none")};
`;
const Stylemaibok = styled.div`
  background-color: #496370;
  height: 390px;
  width: 640px;
  border-radius: 10px;
`;
const StyleButtonFrame = styled.div`
  flex-direction: column;
  text-align: center;
`;
function App() {
  var obj = someobject;
  console.log(obj);
  const [url, seturl] = useState("PWbi8J1_X5Q");
  const [isHide, setIsHide] = useState(false);
  const [ind, setind] = useState(
    createNumeralArray(Object.keys(obj.vote1).length)
  );
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

          <StyleButtonFrame
            style={{ flexDirection: "column", textAlign: "center" }}
          >
            <StyleButton
              onClick={() => setIsHide(() => !isHide)}
              style={{ margin: 20, fontFamily: "Comfortaa" }}
            >
              toggle hide{" "}
            </StyleButton>
            <StyleButton
              style={{ margin: 20, fontFamily: "Comfortaa" }}
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
