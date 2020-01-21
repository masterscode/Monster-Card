import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppByMosh from "./mosh";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AppByMosh />, document.getElementById("mosh"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
