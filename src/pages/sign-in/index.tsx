// @ts-nocheck
import { AuthContext } from "auth";
import React, { FC, useContext } from "react";

type SignInType = {};

const SignIn: FC<SignInType> = () => {
  const data = useContext(AuthContext);

  const OnClick = () => {
    data.setAuth(true);
  };

  return <input type="button" value="SIGN IN" onClick={OnClick} />;
};

export default SignIn;
