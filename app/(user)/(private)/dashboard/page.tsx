"use client";

import React, { useContext } from "react";
import { useLogout } from "@/src/api/auth/hooks";
import { AuthContext } from "@/src/context/auth";
import { useGetUserInfo } from "@/src/api/user/hooks";

const Dashboard = (): JSX.Element => {
  const { handleLogout } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });
  // TODO move from here - now just for testing
  useGetUserInfo();

  return <button onClick={() => logout()}>Dashboard</button>;
};

export default Dashboard;
