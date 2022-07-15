import React from "react";
import ReactDOM from "react-dom";

/* Anadir un componente externo App */
import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
