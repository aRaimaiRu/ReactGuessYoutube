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
};
