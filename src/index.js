import "./Styles/CustomizedBootstrap.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Control from "./Page/Control";
import Login from "./Page/Login";
import LoginDoc from "./Page/LoginDoc";
import HomeDoc from "./Page/HomeDoc";
import Signup from "./Page/Signup";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Control />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
