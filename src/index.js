import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import store from "./store";
import Scenery from "./components/Scenery";

const App = () => (
  <Provider store={store}>
    <Scenery />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
