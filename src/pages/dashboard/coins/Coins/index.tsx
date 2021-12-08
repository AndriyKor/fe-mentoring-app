// @ts-nocheck
import React from "react";
import { Coin } from "../Coin";
import { CoinsNav } from "../CoinsNav";
import { Switch, Route } from "react-router-dom";

export const Coins = (props) => {
  const { user } = props;
  console.log("user", user);
  return (
    <div>
      <CoinsNav coins={user?.coins} />

      <Switch>
        {/* <Route path={`/dashboard/coins/:name`} component={Coin} exact /> */}
        <Route path={`/dashboard/coins/:name`} component={Coin} exact />
      </Switch>
    </div>
  );
};
