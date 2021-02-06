import { useState } from "react";
import { useHistory } from "react-router-dom";

//Hook
import { usePlayerData } from "../../hooks/player";
//Styles
import {
  Container,
  Form,
  FormSubtitle,
  Input,
  SelectVehicles,
  ButtonSubmit,
} from "./styles";
//vehicles
import { vehiclesPlayer } from "../../utils/vehicles";

const Player = () => {
  const history = useHistory();
  const singPlayerData = usePlayerData();

  const [nick, setNick] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmitDataPlayer = (e) => {
    e.preventDefault();
    console.log({ player: { nick, avatar } });
    const dataPlayer = { player: { nick, avatar } };

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
              onClick={() => setAvatar(vehicle.image)}
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
