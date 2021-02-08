import { Link } from "react-router-dom";
//Icons
import backIcon from "../../assets/icons/back-button.svg";
//Styles
import { Button } from "./styles";

const BackButton = () => {
  return (
    <Button>
      <Link to="/player">
        <img src={backIcon} alt="Back" />
      </Link>
    </Button>
  );
};
export default BackButton;
