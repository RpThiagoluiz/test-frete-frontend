import { useState } from "react";
import { useHistory } from "react-router-dom";

//Custom Hook
import { usePlayer } from "../../hooks/playerProvider";
//Styles
import {
  Container,
  Form,
  FormSubtitle,
  Input,
  SelectVehicles,
  ButtonSubmit,
} from "./styles";
//Vehicles
import { vehiclesPlayer } from "../../utils/vehicles";

const Player = () => {
  const history = useHistory();
  const [nick, setNick] = useState("");
  const [vehiclePlayer, setVehiclePlayer] = useState("");

  const { setPlayer } = usePlayer();

  const handleSubmitDataPlayer = (e) => {
    e.preventDefault();

    //For hour
    if (nick !== "" && vehiclePlayer !== "") {
      setPlayer({ nick: nick, vehicle: vehiclePlayer });
    }

    alert(`Lets Play! ${nick}`);
    history.push("/game");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitDataPlayer}>
        <FormSubtitle>Nick Name</FormSubtitle>
        <Input
          type="text"
          placeholder="Player Name"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
        />
        <FormSubtitle>Select Your Vehicle</FormSubtitle>
        <SelectVehicles>
          {vehiclesPlayer.map((vehicle, index) => (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => setVehiclePlayer(vehicle.image)}
            >
              <img src={vehicle.image} alt={vehicle.name} />
            </button>
          ))}
        </SelectVehicles>

        <ButtonSubmit type="submit">Start!</ButtonSubmit>
      </Form>
    </Container>
  );
};
export default Player;
