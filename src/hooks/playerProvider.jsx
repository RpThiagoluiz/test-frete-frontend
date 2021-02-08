import { useContext, useState } from "react";
//Context
import { PlayerContext } from "./playerContext";

//Default vehicle
import car from "../assets/avatar/car.png";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    player: { nick: "Anonimous", vehicle: car },
  });

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => {
  const context = useContext(PlayerContext);
  const { player, setPlayer } = context;
  return { player, setPlayer };
};

export { PlayerProvider, usePlayer };
