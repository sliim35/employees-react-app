import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App data="employees.json" />, document.getElementById("root"));
registerServiceWorker();
