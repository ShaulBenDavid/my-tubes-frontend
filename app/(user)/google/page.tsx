"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const Google = () => {
  const searchParams = useSearchParams();
  console.log("searchParams1 =", searchParams);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code && !error) {
      // eslint-disable-next-line no-use-before-define
      onGogglelogin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const googleLoginHandler = (code: any) =>
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}user/auth/login/google/?code=${code}`,
      )
      .then((res) => {
        localStorage.setItem("goggleFirstName", res.data.user.first_name);
        setError(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("err =", err);
        return err;
      });

  const onGogglelogin = async () => {
    const response = await googleLoginHandler(searchParams.get("code"));
    console.log("response =", response);
    if (response.data.access) {
      router.push("/");
    }
  };

  return (
    <div className="loading-icon-container">
      <div className="loading-icon">
        <div className="loading-icon__circle loading-icon__circle--first" />
        <div className="loading-icon__circle loading-icon__circle--second" />
        <div className="loading-icon__circle loading-icon__circle--third" />
        <div className="loading-icon__circle loading-icon__circle--fourth" />
      </div>
      <small className=" mr-2 text-center">Just a moment</small>
    </div>
  );
};

export default Google;
