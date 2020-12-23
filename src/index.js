import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App/App";
// import Spinner from "./components/Spinner/Spinner";

import { store } from "./redux/store";
// import routes from "./routes";
// import path from "./helpers/allAsyncViews";

import "modern-normalize/modern-normalize.css";
import "./main.scss";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path={"/login"} component={App} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
