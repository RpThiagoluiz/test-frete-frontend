//Styles
import { useEffect, useState } from "react";
import { Grid, LeftSide, Content, ImageAvatar, RightSide } from "./styles";
import carIcon from "../../assets/avatar/car.png";

const GamePage = () => {
  const [playerName, setPlayerName] = useState("Player");
  const [score, setScore] = useState(0);
  const [moveVehicle, setMoveVehicle] = useState("48vw");

  useEffect(() => {
    //keypress da janela...E agora.
  }, [playerName, score, moveVehicle]);
  //Refresh button, setScore=0

  const switchLineVehicle = (e) => {
    switch (e.onKeyDown) {
      case "A" | "ArrowLeft":
        setMoveVehicle("43vw");
        console.log(moveVehicle);
        break;

      case "S" | "ArrowDown":
        setMoveVehicle("48vw");
        break;

      case "D" | "ArrowRight":
        setMoveVehicle("54vw");
        break;

      default:
        return "48vw";
    }
  };

  return (
    <Grid>
      <LeftSide></LeftSide>
      <Content>
        <ImageAvatar
          src={carIcon}
          alt="Car"
          moveSides={moveVehicle} //styles position image
          onKeyDown={(e) => switchLineVehicle(e)}
        />
      </Content>
      <RightSide>
        <h3>{playerName}</h3>
        <small>{score}</small>
      </RightSide>
    </Grid>
  );
};
export default GamePage;
