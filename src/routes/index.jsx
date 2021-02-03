import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app.routes";

//If have authroutes,
const Routes = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
export default Routes;
