import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImYoutube2 } from "react-icons/im";
import { Card } from "@/src/components/Card";
import theme from "@/src/styles/tailwind.theme";
import { googleAuthUrl, scope } from "./Login.config";
import S from "./Login.module.css";

export const Login = (): JSX.Element => {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID ?? "",
    redirect_uri: `http://localhost:3000/google`,
    prompt: "select_account",
    access_type: "offline",
    scope,
  });

  const url = `${googleAuthUrl}?${params}`;

  return (
    <div className={S.loginBackground}>
      <Card className="flex h-52 flex-col items-center justify-between p-4">
        <ImYoutube2 fill={theme.white} size={90} />
        <h1 className="mb-10 text-xl font-bold">
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
