"use client";

import React, { useContext } from "react";
import { useLogout } from "@/src/api/auth/hooks";
import { AuthContext } from "@/src/context/auth";

const Dashboard = (): JSX.Element => {
  const { handleLogout } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });

  return <button onClick={() => logout()}>Dashboard</button>;
};

export default Dashboard;
