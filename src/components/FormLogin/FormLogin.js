import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../Buttons/PrimaryBtn/PrimaryBtn";
import FormLabel from "../FormLabel/FormLabel";

import s from "./FormLogin.module.scss";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // для теста стилей на ошибку ---start
  const errorEmail = false;
  const errorPassword = false;
  // --end

  return (
    <form className={s.formAuth}>
      <h2 className={s.titleForm}>Вхід</h2>

      <FormLabel
        stateValue={email}
        type={"email"}
        name={"email"}
        text={"E-mail"}
        handleChange={setEmail}
        timeError={errorEmail}
      />

      <FormLabel
        stateValue={password}
        type={"password"}
        name={"password"}
        text={"Пароль"}
        handleChange={setPassword}
        timeError={errorPassword}
      />

      <PrimaryBtn text={"Увійти"} />

      <div className={s.isNoAccunt}>
        <span>Немає акаунту?</span>
        <Link className={s.linkOnRegistration} to={"/registration"}>
          Зареєструватись
        </Link>
      </div>
    </form>
  );
}
