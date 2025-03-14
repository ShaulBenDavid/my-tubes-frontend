import React from "react";
import {
  FcBarChart,
  FcSelfie,
  FcMoneyTransfer,
  FcPanorama,
  FcShare,
} from "react-icons/fc";

export const servicesConfig = [
  {
    icon: <FcShare size={32} />,
    text: "Sharing Ability",
    borderColor: "#1e88e5",
  },
  {
    icon: <FcSelfie size={32} />,
    text: "Your Own Profile",
    borderColor: "#ff5722",
  },
  {
    icon: <FcBarChart size={32} />,
    text: "Easy Track",
    borderColor: "#00bcd4",
  },
  {
    icon: <FcMoneyTransfer size={32} />,
    text: "Link Page With Value",
    borderColor: "#82c336",
  },
  {
    icon: <FcPanorama size={32} />,
    text: "Custom TV",
    borderColor: "#f57c00",
  },
];
