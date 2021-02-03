//Styles
import { useEffect, useState } from "react";
import { Grid, LeftSide, Content, RightSide } from "./styles";
import carIcon from "../../assets/avatar/car.png";

const GamePage = () => {
  const [playerName, setPlayerName] = useState("Player");
  const [score, setScore] = useState(0);

  // useEffect(() => {},[]) -> Up to score
  //Refresh button, setScore=0

  const handleStartGameButton = (e) => {
    e.preventDefault();
    console.log("Start");
  };

  return (
    <Grid>
      <LeftSide>
        <h1>Nick Name</h1>
        <input
          type="text"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button onClick={handleStartGameButton}>Start!</button>
      </LeftSide>
      <Content>
        <h1>GAME</h1>
        <img src={carIcon} alt="Car" />
      </Content>
      <RightSide>
        <h3>{playerName}</h3>
        <small>{score}</small>
      </RightSide>
    </Grid>
  );
};
export default GamePage;
