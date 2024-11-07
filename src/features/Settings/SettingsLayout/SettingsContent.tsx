import React, { type ReactNode } from "react";

interface SettingsContentProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const SettingsContent = ({
  title,
  description,
  children,
}: SettingsContentProps): JSX.Element => (
  <section className="flex w-full animate-[fadeIn_0.5s_ease-in_forwards] flex-col gap-6">
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-white/70">{description}</p>
    </header>
    <hr className="border-r-2 border-white/30" />
    {children}
  </section>
);
