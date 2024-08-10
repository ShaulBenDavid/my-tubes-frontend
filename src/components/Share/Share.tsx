"use client";

import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

interface ShareProps {
  url: string;
  title: string;
  content: string;
}

export const Share = ({
  url = "",
  title,
  content,
}: ShareProps): JSX.Element => (
  <div className="flex w-full flex-col gap-4">
    <h3 className="text-base font-semibold">Share with your friends</h3>
    <div
      className="flex flex-wrap gap-2 pl-2"
      data-testid="share-component-test-id"
    >
      <EmailShareButton url={url} subject={title} body={content}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton url={url} quote={content} hashtag="#dwizard">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={content} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <RedditShareButton url={url} title={content}>
        <RedditIcon size={32} round />
      </RedditShareButton>

      <TwitterShareButton url={url} title={content}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  </div>
);
