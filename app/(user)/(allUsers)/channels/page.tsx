"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SharedChannels } from "@/src/features/SharedPage/SharedChannels";
import { InfoSection } from "@/src/features/SharedPage/InfoSection";

const ChannelsPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="flex h-full w-full flex-col items-center overflow-hidden overflow-y-auto">
        {token && (
          <article className="flex h-full w-full max-w-[1400px] flex-col gap-4 p-2 tb:p-4">
            <InfoSection token={token} />
            <SharedChannels token={token} />
          </article>
        )}
      </main>
    </DndProvider>
  );
};

export default ChannelsPage;
