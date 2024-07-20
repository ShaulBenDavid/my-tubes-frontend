"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ConsentModal, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
import { Button, ButtonVariants } from "@/src/components/Button";
import theme from "@/src/styles/tailwind.theme";

export const CookieConsent = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (getCookieConsentValue() === "false") {
      resetCookieConsentValue();
    }
  }, []);

  return (
    <ConsentModal
      enableDeclineButton
      style={{
        backgroundColor: theme["bg-grey"],
        color: theme.white,
        borderRadius: "12px 12px 0 0",
      }}
      onAccept={router.refresh}
      buttonWrapperClasses="flex flex-row gap-3 tb:w-[400px] max-w-[600px] px-2 pb-2"
      overlay
      ButtonComponent={(
        props: React.ButtonHTMLAttributes<HTMLButtonElement>,
      ) => (
        <Button
          variant={
            props.id === "rcc-decline-button"
              ? ButtonVariants.LINK
              : ButtonVariants.PRIMARY
          }
          {...props}
        />
      )}
    >
      🍪 This website uses cookies to enhance the user experience.
    </ConsentModal>
  );
};
