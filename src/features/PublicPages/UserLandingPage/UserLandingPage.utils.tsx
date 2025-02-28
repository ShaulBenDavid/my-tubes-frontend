import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { UserProfileType } from "@/src/api/user";
import type { SocialLinkType } from "./components/SocialLinks/SocialLinks";

export const getSocialLinks = (profile: UserProfileType): SocialLinkType[] => {
  const links = [
    {
      backgroundColor: "#c13584",
      href: profile?.instagramUrl,
      icon: <FaInstagram size={24} className="shrink-0" />,
      title: "Instagram",
    },
    {
      backgroundColor: "#0077b5",
      href: profile?.linkedinUrl,
      icon: <FaLinkedinIn size={24} className="shrink-0" />,
      title: "Linkedin",
    },
    {
      backgroundColor: "#ff0000",
      href: profile?.youtubeUrl,
      icon: <FaYoutube size={24} className="shrink-0" />,
      title: "Youtube",
    },
    {
      backgroundColor: "#1d9bf0",
      href: profile.twitterUrl,
      icon: <FaXTwitter size={24} className="shrink-0" />,
      title: "XTwitter",
    },
    {
      backgroundColor: "#ff0050",
      href: profile.tiktokUrl,
      icon: <FaTiktok size={24} className="shrink-0" />,
      title: "TikTok",
    },
    {
      backgroundColor: "#7661C2",
      href: profile.telegramUrl,
      icon: <FaTelegram size={24} className="shrink-0" />,
      title: "Telegram",
    },
  ];

  return links.filter(
    ({ href }) => typeof href === "string",
  ) as SocialLinkType[];
};
