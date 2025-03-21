import React from "react";
import { WEBSITE_MAIL } from "@/src/constants";

const ContactUs = () => (
  <div className="flex w-full flex-col items-center justify-center">
    <div className="w-full max-w-2xl rounded-2xl bg-bg-grey p-5 shadow-lg">
      <h1 className="mb-2 text-lg font-bold tb:text-3xl">Contact Us</h1>
      <p className="mb-6">
        Have questions or need support? Feel free to reach out to us!
      </p>
      <div className="flex items-center justify-between rounded-xl bg-spec-space-bg p-4">
        <span className="text-lg font-medium text-white">{WEBSITE_MAIL}</span>
        <a
          href={`mailto:${WEBSITE_MAIL}`}
          className="rounded-lg bg-primary-900 px-4 py-2 transition hover:bg-primary-950"
        >
          Email Us
        </a>
      </div>
    </div>
  </div>
);

export default ContactUs;
