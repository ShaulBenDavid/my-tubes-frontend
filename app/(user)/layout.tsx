import React from "react";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/src/metadata";
import { AppProviders } from "@/src/providers";
import "@/src/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#810CA8",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html lang="en">
    <body
      /* prettier-ignore */
      className={`min-h-[100dvh] w-full ${inter.variable} bg-spec-space-bg flex flex-col  items-center justify-start font-inter text-white`}
    >
      <AppProviders>
        <main className="w-[1227px] flex-1 justify-center pt-14 max-lg:w-[1000px] max-md:w-full max-md:px-4">
          {children}
        </main>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
