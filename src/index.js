import React from "react";
import { render } from "react-dom";
import App from "./app/app";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const globalStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
