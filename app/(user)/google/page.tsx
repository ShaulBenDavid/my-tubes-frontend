"use client";

import React, { useContext } from "react";
import { useSearchParams } from "next/navigation";
import type { AuthResponseType } from "@/src/api/auth";
import { useLogin } from "@/src/api/auth/hooks";
import { AuthContext } from "@/src/context/auth";

const Google = (): JSX.Element => {
  const { setAuth } = useContext(AuthContext);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const params = {
    code: code ?? "",
  };

  const handleSuccess = (res: AuthResponseType): void => {
    setAuth(res);
  };
  const { isLoginLoading } = useLogin({
    params,
    enabled: !!code,
    handleSuccess,
  });

  return (
    <div className="loading-icon-container">
      <div className="loading-icon">
        <div className="loading-icon__circle loading-icon__circle--first" />
        <div className="loading-icon__circle loading-icon__circle--second" />
        <div className="loading-icon__circle loading-icon__circle--third" />
        <div className="loading-icon__circle loading-icon__circle--fourth" />
      </div>
      {isLoginLoading && (
        <small className="mr-2 text-center">Just a moment</small>
      )}
    </div>
  );
};

export default Google;
