import React from "react";
import type { DefaultTemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { WEBSITE_URL } from "@/src/constants";
import { defaultMetadata } from "@/src/metadata";
import { ShareButtons } from "@/src/components/Share/ShareButtons";

export const Sharing = (): JSX.Element => (
  <section className="flex flex-col items-center gap-3 text-center">
    <h2 className="text-center text-lg font-bold tb:text-2xl">
      Tell your friends!
    </h2>
    <ShareButtons
      url={WEBSITE_URL}
      title={(defaultMetadata.title as DefaultTemplateString).default as string}
      content={defaultMetadata.description as string}
    />
  </section>
);
