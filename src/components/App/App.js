import React from "react";
import { connect } from "react-redux";

import LoginPage from "../../views/LoginPage/LoginPage";

import s from "./App.module.scss";

const App = () => {
  return (
    <>
      <div className={s.header}>Тут будет компонент Header</div>
      <LoginPage />
    </>
  );
};

const mDTP = {};

export default connect(null, mDTP)(App);
