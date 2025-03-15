import React from "react";
import type { Viewport } from "next";
import { Inter, Yellowtail } from "next/font/google";
import { defaultMetadata } from "@/src/metadata";
import { AppProviders } from "@/src/providers";
import { GoogleAnalytics } from "@/src/providers/GoogleAnalytics";
import theme from "@/src/styles/tailwind.theme";
import "@/src/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
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
    {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    <body
      className={`w-full ${inter.variable} bg-spec-space-bg font-inter text-white ${yellowtail.variable}`}
    >
      <AppProviders>{children}</AppProviders>
    </body>
  </html>
);

export default RootLayout;
