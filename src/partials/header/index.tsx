// @ts-nocheck
import { AuthContext } from "auth";
import React, { useContext } from "react";
import {
  ROUTE_SIGN_IN,
  ROUTE_DASHBOARD,
} from "../../components/router/constants";

export const Header = () => {
  const data = useContext(AuthContext);

  const { state, setAuth } = data;
  const { isAuthorized } = state;

  const onClick = () => {
    setAuth(false);
  };

  return (
    <header>
      <nav>
        {!isAuthorized ? (
          <button>
            <a href={ROUTE_SIGN_IN}>Sign In Page</a>
          </button>
        ) : (
          <>
            <button>
              <a href={ROUTE_DASHBOARD}>Dashboard</a>
            </button>
            <button onClick={onClick}>Sign Out Page</button>
          </>
        )}
      </nav>
    </header>
  );
};
