// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

export const CoinsNav = (props) => {
  const { coins = [] } = props;

  return (
    <ul className="nav">
      {coins.map((code) => (
        <li key={code}>
          <Link to={`/dashboard/coins/${code}`}>{code}</Link>
        </li>
      ))}
    </ul>
  );
};
