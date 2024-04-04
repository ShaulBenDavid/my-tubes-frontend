"use client";

import React, { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import type { AuthResponseType } from "@/src/api/auth";
import { useLogin } from "@/src/api/auth/hooks";
import { AuthContext } from "@/src/context/auth";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import { Card } from "@/src/components/Card";
import { EmptyState } from "@/src/components/EmptyState";
import { Routes } from "@/src/routes";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import S from "./CallbackPage.module.css";

export const CallbackPage = (): JSX.Element => {
  const { setAuth } = useContext(AuthContext);
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  const params = {
    code: code ?? "",
  };

  const handleSuccess = (res: AuthResponseType): void => {
    setAuth(res);
    router.push("/dashboard");
  };
  const { isLoginLoading, isLoginError } = useLogin({
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
      {(!code || isLoginError) && (
        <Card className="p-4">
          <EmptyState
            header="Sorry the login failed, please try again."
            svgUrl={WarningSVG}
            footer={
              <ButtonLink
                href={Routes.LOGIN}
                variant={ButtonLinkVariants.PRIMARY}
              >
                Go to login
              </ButtonLink>
            }
          />
        </Card>
      )}
    </div>
  );
};
