// @ts-nocheck
import React from "react";
import { Coins } from "./coins/Coins";
import { useUsersData } from "./useUserData";

const Dashboard = () => {
  const { data, loading } = useUsersData();

  if (loading) return "Loading";

  const [, user] = data || [];

  return (
    <>
      <h1>THIS IS DASHBOARD</h1>

      {user.name.first}
      <Coins user={user} />
    </>
  );
};

export default Dashboard;
