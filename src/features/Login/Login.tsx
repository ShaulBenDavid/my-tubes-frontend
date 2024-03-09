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
        className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow"
      >
        <FcGoogle size={24} />
        <span>Login with Google</span>
      </a>
    </div>
  );
};
