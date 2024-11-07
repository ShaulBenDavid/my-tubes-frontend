"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { SharedChannels } from "@/src/features/PublicPages/SharedPage/SharedChannels";
import { InfoSection } from "@/src/features/PublicPages/SharedPage/InfoSection";

const ChannelsPage = (): JSX.Element | null => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return token ? (
    <article className="flex h-full w-full max-w-[1400px] flex-col gap-4 p-2 tb:p-4">
      <InfoSection token={token} />
      <SharedChannels token={token} />
    </article>
  ) : null;
};

export default ChannelsPage;
