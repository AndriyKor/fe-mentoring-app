// @ts-nocheck
import React from "react";
import { useParams } from "react-router";

export const Coin = (props) => {
  const { name } = useParams();
  console.log(name, props);
  return <div>{name}</div>;
};
