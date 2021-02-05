import { Link } from "react-router-dom";
//Styles
import { Container, Title } from "./styles";
//Images,Icons
import playIcon from "../../assets/icons/play.svg";

const HomePage = () => {
  return (
    <Container>
      <Title>Just Regular Car Game 8-Bits</Title>
      <Link to="/player">
        <img src={playIcon} alt="Game Page" />
      </Link>
    </Container>
  );
};
export default HomePage;
