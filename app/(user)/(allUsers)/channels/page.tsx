"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { SharedPage } from "@/src/features/PublicPages/SharedPage";

const ChannelsPage = (): JSX.Element | null => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return token ? <SharedPage token={token} /> : null;
};

export default ChannelsPage;
