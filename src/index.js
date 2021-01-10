import React from "react";
import ReactDOM from "react-dom";
import StyleGlobal from "./styles/StyleGlobal";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <StyleGlobal />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
