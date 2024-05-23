"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <DndProvider backend={HTML5Backend}>
    <div className="flex h-full w-full flex-col overflow-hidden">
      {children}
    </div>
  </DndProvider>
);

export default Layout;
