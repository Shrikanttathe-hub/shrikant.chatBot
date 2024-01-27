import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CricketProvider from "./Context/CricketProvider";

ReactDOM.render(

<CricketProvider>
  <App />
</CricketProvider>
,

document.getElementById("root"))