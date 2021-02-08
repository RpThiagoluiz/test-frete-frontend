import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
//Custom Hook
import { usePlayer } from "../../hooks/playerProvider";
//Components
import StartGameCount from "../../components/StartGameCount";
//Styles
import { Grid, LeftSide, Content, ImageAvatar, RightSide } from "./styles";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [moveVehicle, setMoveVehicle] = useState("48%");

  const { player } = usePlayer();
  console.log(player);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 65:
        case 37:
          setMoveVehicle("36vw");
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
      <StartGameCount />
      <LeftSide>
        <BackButton />
      </LeftSide>
      <Content>
        <ImageAvatar
          src={player.vehicle}
          alt="Car"
          moveSides={moveVehicle} //styles position image
        />
      </Content>
      <RightSide>
        <h3>{player.nick}</h3>
        <small>{score}</small>
      </RightSide>
    </Grid>
  );
};
export default GamePage;
