import { useState } from "react";
import { useHistory } from "react-router-dom";
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

  const [nick, setNick] = useState("");
  const [avatar, setAvatar] = useState();
  const [playerData, setPlayerData] = useState({
    nick,
    avatar,
  });

  const handleSubmitDataPlayer = (e) => {
    e.preventDefault();
    const dataPlayer = playerData;
    alert(`Lets Play! ${nick === "" ? "Anonimous" : nick}`);
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
          {vehiclesPlayer.map((vehicle, e) => (
            <img
              key={vehicle.id}
              src={vehicle.image}
              alt={vehicle.name}
              onClick={console.log(vehicle.id)}
            />
          ))}
        </SelectVehicles>

        <ButtonSubmit type="submit">Start!</ButtonSubmit>
      </Form>
    </Container>
  );
};
export default Player;
