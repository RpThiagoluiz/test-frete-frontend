import { createContext, useState, useContext } from "react";

//Default Vehicle
import carVehicle from "../assets/avatar/car.png";

const PlayerContext = createContext();

const PlayerProvider = ({ Children }) => {
  const [playerData, setPlayerData] = useState({
    player: { nick: "Anonimous", avatar: carVehicle },
  });

  const singPlayerData = (player) => {
    const { nick, avatar } = player;

    const newPlayer = {
      nick,
      avatar,
    };
    return setPlayerData(newPlayer);
  };

  const outPlayerData = () => {
    const out = {
      player: { nick: "Anonimous", avatar: carVehicle },
    };
    return setPlayerData(out);
  };

  return (
    <PlayerContext.Provider value={(playerData, singPlayerData, outPlayerData)}>
      {Children}
    </PlayerContext.Provider>
  );
};

const usePlayerTheme = () => {
  const context = useContext(PlayerContext);

  return context;
};

export { usePlayerTheme, PlayerProvider };
