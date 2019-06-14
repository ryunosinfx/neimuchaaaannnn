import * as React from "react";
import * as ReactDOM from "react-dom";
import * as style from "./css/common.css";
import { Provider } from "react-redux";
import { Store } from "./js/module/Store";

import MainContainer from "./js/components/container/MainContainer";

const body: any = document.getElementsByTagName("body")[0];
body.style.padding = 0;
body.style.margin = 0;

const rootEl = document.getElementById("root");
rootEl
  ? ReactDOM.render(
      <Provider store={Store}>
        <MainContainer />
      </Provider>,
      rootEl
    )
  : false;
