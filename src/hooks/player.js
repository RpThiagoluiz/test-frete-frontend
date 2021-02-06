import { useContext, createContext, useState } from "react";

//DefaultVehicle
import carVehicle from "../assets/avatar/car.png";

//Context
const PlayerContext = createContext({ player: {} });

//Provider
const PlayerProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState({
    player: { nick: "Anonimous", avatar: carVehicle },
  });

  const regPlayer = (nick, avatar) => {
    if (!nick && !avatar) {
      return setPlayerData({ player: { nick, avatar } });
    }
  };

  return (
    <PlayerContext.Provider value={(playerData, regPlayer)}>
      {children}
    </PlayerContext.Provider>
  );
};

function usePlayerData() {
  const context = useContext(PlayerContext);
  return context;
}

export { PlayerProvider, usePlayerData };
