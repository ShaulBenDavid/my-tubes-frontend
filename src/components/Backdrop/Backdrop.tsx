"use client";

import React from "react";

interface BackdropProps {
  onClick: () => void;
}

export const Backdrop = ({ onClick }: BackdropProps) => (
  <div
    onClick={onClick}
    aria-hidden="true"
    className="absolute inset-0 z-50 h-dvh w-screen animate-[fadeIn_0.2s_ease-in_forwards] cursor-pointer bg-spec-space-bg/50"
  />
);
