import React from "react";
import ReactDOM from "react-dom";
import Routes from "./router";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();