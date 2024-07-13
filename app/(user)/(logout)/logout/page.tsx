"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/auth";
import { useLogout } from "@/src/api/auth/hooks";
import { Routes } from "@/src/routes";

const LogoutPage = () => {
  const { handleLogout } = useContext(AuthContext);
  const router = useRouter();
  const { logout } = useLogout({
    handleSuccess: () => {
      handleLogout();
      router.push(Routes.LOGIN);
    },
  });

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
