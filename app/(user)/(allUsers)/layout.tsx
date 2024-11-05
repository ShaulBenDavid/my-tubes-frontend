"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <DndProvider backend={HTML5Backend}>
    <main className="flex h-full w-full flex-col items-center overflow-hidden overflow-y-auto">
      {children}
    </main>
  </DndProvider>
);

export default Layout;
