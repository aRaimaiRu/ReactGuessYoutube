import Background from "./unknown.png";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyleAPP = styled.div`
  background-color: #eef5fa;
  font-family: Comfortaa;
`;
const StyleButton = styled(Button)`
  && {
    margin: 20px;
    font-family: Comfortaa;
  }
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
  margin: auto;
`;
const Frametop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 7px;
  position: fixed;
  background: #b6da3e;
  pointer-events: none;
  z-index: 9999;
`;
const Frameright = styled.div`
  top: 0;
  right: 0;
  width: 7px;
  height: 100%;
  position: fixed;
  background: #b6da3e;
  pointer-events: none;
  z-index: 9999;
`;
const FrameBottom = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px;

  position: fixed;
  background: #b6da3e;
  pointer-events: none;
  z-index: 9999;
`;
const FrameLeft = styled.div`
  top: 0;
  left: 0;
  width: 7px;
  height: 100%;

  position: fixed;
  background: #b6da3e;
  pointer-events: none;
  z-index: 9999;
`;
const TopRightTriangle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75px;
  height: 160px;
  pointer-events: none;
  z-index: 9998;
`;
const BottomLeftTriangle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 75px;
  height: 160px;
  pointer-events: none;
  z-index: 9998;
`;
export {
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
};
