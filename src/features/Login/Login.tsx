import React from "react";
import { FcGoogle } from "react-icons/fc";
import { googleAuthUrl, scope } from "./Login.config";

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
    <div className="flex h-screen items-center justify-center">
      <a
        href={url}
        className="flex gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-200 transition duration-150 hover:border-slate-500 hover:text-slate-300 hover:shadow"
      >
        <FcGoogle size={24} />
        <span>Login with Google</span>
      </a>
    </div>
  );
};
