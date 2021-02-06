import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Custom Hook
import { PlayerProvider } from "./hooks/player";

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
