import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Custom Hook
import { PlayerProvider } from "./hooks/playerProvider";

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
