import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import someobject from "./aaaaaa.json";
//const data = require("./anydata.json");
import { filterByVote, createNumeralArray } from "./util.js";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';  
import Background from './ev_263.png';
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
    <div className="App" style ={{'backgroundColor':'#eef5fa' , fontFamily: 'Comfortaa'}} >
<div style = {{backgroundImage: `url(${Background})` ,height: window.innerHeight }}>
      <div style = {{display: 'flex' ,flexDirection : 'column'}}>
        <h1 style = {{textAlign : 'center' , color:'	#719cad'}}>
          ReactGuessYoutube
        </h1>
        <div style ={{margin:'auto',padding:20 }}>
      <div style={{ display: isHide ? "block" : "none" }}> 
        <YouTube videoId={url} opts={opts} onReady={onReady} />
      </div>

      <div style={{ display: !isHide ? "block" : "none"  }}>
        <div
          style={{ backgroundColor: '#496370', height: 390, width: 640 , borderRadius:10}}
        ></div>
      </div>
      </div>

      <div style  ={{flexDirection:"column", textAlign:'center'}}>

      <Button onClick={() => setIsHide(() => !isHide)} style ={{margin:20 , fontFamily: 'Comfortaa'}}>toggle hide </Button>
      <Button style ={{margin:20 , fontFamily: 'Comfortaa'}}
        onClick={() => {
          seturl(randomURLV2());
          setIsHide(() => false);
        }}
      >
        random URL{" "}
      </Button>
      </div>
    </div>
    </div>
    </div>
   
  );
}



export default App;
