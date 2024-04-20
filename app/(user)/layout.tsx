import React from "react";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/src/metadata";
import { AppProviders } from "@/src/providers";
import theme from "@/src/styles/tailwind.theme";
import "@/src/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: theme.primary[700],
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html lang="en">
    <body
      /* prettier-ignore */
      className={`min-h-[100dvh] w-full ${inter.variable} bg-spec-space-bg font-inter text-white`}
    >
      <AppProviders>{children}</AppProviders>
    </body>
  </html>
);

export default RootLayout;
