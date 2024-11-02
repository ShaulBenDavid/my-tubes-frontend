import React from "react";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/src/metadata";
import { AppProviders } from "@/src/providers";
import theme from "@/src/styles/tailwind.theme";
import "@/src/styles/global.css";
import { GoogleAnalytics } from "@/src/providers/GoogleAnalytics";

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
  <html lang="en" className="h-dvh overflow-hidden">
    {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    <body
      className={`h-dvh w-full overflow-hidden ${inter.variable} bg-spec-space-bg font-inter text-white`}
    >
      <AppProviders>{children}</AppProviders>
    </body>
  </html>
);

export default RootLayout;
