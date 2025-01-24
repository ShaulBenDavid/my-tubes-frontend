"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <DndProvider backend={HTML5Backend}>
    <div className="flex w-full flex-col overflow-x-clip">{children}</div>
  </DndProvider>
);

export default Layout;
