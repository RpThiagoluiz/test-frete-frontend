import { usePlayerData } from "../../hooks/player";
//Styles
import { useEffect, useState } from "react";
import { Grid, LeftSide, Content, ImageAvatar, RightSide } from "./styles";
import carIcon from "../../assets/avatar/car.png";
import { Switch } from "react-router-dom";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [moveVehicle, setMoveVehicle] = useState("48%");

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 65:
        case 37:
          setMoveVehicle("40vw");
          break;
        case 83:
        case 40:
          setMoveVehicle("48%");
          break;
        case 68:
        case 39:
          setMoveVehicle("56vw");
          break;
        case 37:
        //Esc for pause Game
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, [score, moveVehicle]);
  //Refresh button, setScore=0

  return (
    <Grid>
      <LeftSide></LeftSide>
      <Content>
        <ImageAvatar
          src={carIcon}
          alt="Car"
          moveSides={moveVehicle} //styles position image
        />
      </Content>
      <RightSide>
        <h3>As left the game</h3>
        <small>{score}</small>
      </RightSide>
    </Grid>
  );
};
export default GamePage;
