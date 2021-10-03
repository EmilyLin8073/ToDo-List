import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";

ReactDOM.render(<App />, document.getElementById("root"));
