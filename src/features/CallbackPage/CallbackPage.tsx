"use client";

import React, { useContext } from "react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import type { AuthResponseType } from "@/src/api/auth";
import { useLogin } from "@/src/api/auth/hooks";
import { AuthContext } from "@/src/context/auth";
import S from "./CallbackPage.module.css";

export const CallbackPage = (): JSX.Element => {
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
    <div className="flex h-full items-center justify-center">
      {isLoginLoading && (
        <div className={S.box}>
          <section className="flex flex-row items-center gap-2">
            <FcGoogle size={34} />
            <small className="text-lg">Just a moment...</small>
          </section>
        </div>
      )}
    </div>
  );
};
