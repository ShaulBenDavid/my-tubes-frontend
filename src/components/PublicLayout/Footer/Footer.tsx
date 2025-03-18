import React from "react";
import Link from "next/link";
import { Routes } from "@/src/routes";
import { FooterNavigation } from "./Navigation";

export const Footer = () => (
  <footer className="w-full max-w-7xl">
    <div className="mx-auto py-6  max-md:w-full max-md:px-2">
      <FooterNavigation />
      <hr className="my-6 border-primary-950 lg:my-8" aria-hidden />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm font-medium sm:text-center">
          <Link
            href={Routes.ROOT}
            aria-label="Home"
            className="hover:underline"
          >
            My-Tubes.com™
          </Link>{" "}
          © {new Date().getFullYear()} All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
);
