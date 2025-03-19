import React from "react";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { twMerge } from "tailwind-merge";
import { Card } from "@/src/components/Card";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Routes } from "@/src/routes";
import { planDetailsConfig, type PlanOption } from "../Plans.config";

export const PlanCard = ({
  title,
  description,
  type,
  price,
  className,
  headerClassName,
  disabled,
}: PlanOption): JSX.Element => (
  <Card
    className={twMerge(
      "flex min-w-[260px] max-w-sm flex-1 flex-col gap-3",
      className,
    )}
  >
    <header
      className={twMerge(
        "flex h-36 flex-col rounded-xl bg-[#1e88e5] py-2 text-center",
        headerClassName,
      )}
    >
      <h3 className="text-lg font-bold tb:text-2xl">{title}</h3>
      <p className="px-2">{description}</p>
      <div className="mt-auto w-full bg-black p-1 font-semibold">{price}</div>
    </header>
    <ul className="flex flex-col gap-2 ">
      {planDetailsConfig.map(({ text, plansIncludes }) => (
        <li key={text} className="flex flex-row gap-2">
          {plansIncludes.includes(type) ? (
            <FcCheckmark size={20} aria-hidden />
          ) : (
            <FcCancel size={20} aria-hidden />
          )}
          {text}
        </li>
      ))}
    </ul>
    {!disabled && (
      <ButtonLink
        href={Routes.LOGIN}
        width="150px"
        className={twMerge(
          "mx-auto mt-auto font-bold hover:bg-gradient-to-l",
          headerClassName,
        )}
      >
        Get Started
      </ButtonLink>
    )}
  </Card>
);
