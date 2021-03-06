import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Player from "../pages/player";
import GamePage from "../pages/game";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/player" component={Player} />
    <Route path="/game" component={GamePage} />
  </Switch>
);
export default AppRoutes;
