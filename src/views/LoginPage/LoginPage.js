import React from "react";

import FormLogin from "../../components/FormLogin/FormLogin";

import s from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <div className={s.wrapperPage}>
      <div className={s.circleBg}></div>
      <div className={s.wrapperForBg}>
        <FormLogin />
      </div>
    </div>
  );
}
