import React from "react";
import { usePathname } from "next/navigation";
import type { NavigationLinksConfig } from "../SideMenu/Navbar/Navbar.config";
import { MobileTab } from "./MobileTab";

interface MobileBarProps {
  navigationLinks: NavigationLinksConfig[];
}

export const MobileBar = ({ navigationLinks }: MobileBarProps): JSX.Element => {
  const activeSegment = usePathname() ?? "/";
  const activeIndex = navigationLinks.findIndex(
    ({ href }) => activeSegment.slice(0, -1) === href,
  );

  return (
    <nav role="navigation" aria-label="settings-main" className="flex w-full">
      <ul className="relative flex w-full flex-row">
        <span
          aria-hidden
          className="absolute h-full rounded-xl bg-white/10 transition-all ease-in-out"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            width: `${100 / navigationLinks.length}%`,
          }}
        />
        {navigationLinks.map(({ label, icon, href }) => {
          const isActive = activeSegment.slice(0, -1) === href;

          return (
            <MobileTab
              key={label}
              href={href}
              label={label}
              icon={icon.default}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </nav>
  );
};
