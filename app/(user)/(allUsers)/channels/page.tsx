"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SharedChannels } from "@/src/features/SharedPage/SharedChannels";

const ChannelsPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="mx-auto flex h-full w-full max-w-[1400px] px-2">
        {token && <SharedChannels token={token} />}
      </main>
    </DndProvider>
  );
};

export default ChannelsPage;