import type { Metadata } from "next";
import { WEBSITE_URL } from "../constants";

const url = new URL("https://my-tubes.com");

export const defaultMetadata: Metadata = {
  title: {
    default:
      "My-Tubes - Manage Your YouTube Channels and Get Detailed Statistics",
    template: "%s | My-Tubes",
  },
  description:
    "My-Tubes is a comprehensive tool for managing your YouTube channels, following other channels, and accessing a detailed statistics dashboard. Optimize your content and track your growth with ease.",
  metadataBase: url,
  applicationName: "My Tubes",
  authors: { name: "My Tubes", url },
  creator: "My-Tubes Team",
  keywords: [
    "YouTube",
    "YouTube manager",
    "my-tubes",
    "YouTube channel management",
    "YouTube analytics",
    "YouTube statistics",
    "channel management",
    "content optimization",
    "my subscriptions",
  ],
  alternates: {
    canonical: new URL(WEBSITE_URL),
  },
  generator: "Next.js",
  publisher: "My-Tubes Team",
  manifest: "/site.json",
  icons: {
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
    },
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/safari-pinned-tab.svg",
        rel: "mask-icon",
      },
    ],
  },
  openGraph: {
    title:
      "My-Tubes - Manage Your YouTube Channels and Get Detailed Statistics",
    description:
      "My-Tubes is a comprehensive tool for managing your YouTube channels, following other channels, and accessing a detailed statistics dashboard. Optimize your content and track your growth with ease.",
    url: WEBSITE_URL,
    siteName: "My-Tubes",
    type: "website",
    images: [
      {
        url: new URL("https://imgur.com/a/7R2tCrM.jpeg"),
        alt: "Intro",
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    title:
      "My-Tubes - Manage Your YouTube Channels and Get Detailed Statistics",
    site: "@mytubes",
    description:
      "My-Tubes is a comprehensive tool for managing your YouTube channels, following other channels, and accessing a detailed statistics dashboard. Optimize your content and track your growth with ease.",
    card: "summary_large_image",
  },
};
