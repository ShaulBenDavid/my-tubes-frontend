"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/src/context/auth";
import { useLogout } from "@/src/api/auth/hooks";

const LogoutPage = () => {
  const { handleLogout } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <main className="flex h-full w-full items-center justify-center">
      <h1>Logout...</h1>
    </main>
  );
};

export default LogoutPage;
