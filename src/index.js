import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./config/router";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(<AppRouter />, document.querySelector("#root"));
