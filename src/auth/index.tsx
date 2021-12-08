// @ts-nocheck
import React, { FC, useReducer } from "react";

type StateType = {
  isAuthorized: boolean;
  user: null;
};

type ActionType = {
  type: string;
  payload: unknown;
};

const initialState = {
  isAuthorized: localStorage.getItem("isAuthorized") || false,
  user: null,
};

export const AuthContext = React.createContext(initialState);

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "SET":
      return { ...state, user: action.payload };
    case "AUTH":
      return { ...state, isAuthorized: action.payload };
    case "FLUSH":
      return { ...initialState, ...action.payload };
    default:
      throw new Error();
  }
}

const AuthContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = (user) => {
    dispatch({ type: "SET", payload: user });
  };

  const setAuth = (flag: boolean) => {
    dispatch({ type: "AUTH", payload: flag });
    localStorage.setItem("isAuthorized", flag);
  };

  //TODO: ask how to reset payload correctly
  const flush = () => {
    dispatch({ type: "FLUSH", payload: initialState });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setUser,
        setAuth,
        flush,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
