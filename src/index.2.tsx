import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./js/components/App";
import { rootReducer } from "./js/modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
ReactDOM.render(<App />, document.getElementById("root"));
