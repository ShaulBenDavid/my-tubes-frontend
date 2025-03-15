import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Card } from "@/src/components/Card";
import { googleAuthUrl, scope } from "./Login.config";
import S from "./Login.module.css";
import { Logo } from "@/src/components/Logo";

export const Login = (): JSX.Element => {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID ?? "",
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL ?? "",
    prompt: "consent",
    access_type: "offline",
    scope,
  });

  const url = `${googleAuthUrl}?${params}`;

  return (
    <div className={S.loginBackground}>
      <Card className="flex h-52 flex-col items-center justify-between p-4">
        <Logo />
        <h1 className="mb-10 text-center text-xl font-bold">
          Welcome to My-Tubes Dashboard please login.
        </h1>
        <a
          href={url}
          className="flex w-56 gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-200 transition duration-150 hover:border-slate-500 hover:text-slate-300 hover:shadow"
        >
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </a>
      </Card>
    </div>
  );
};
