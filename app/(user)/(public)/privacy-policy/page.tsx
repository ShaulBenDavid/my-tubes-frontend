import React from "react";
import { WEBSITE_MAIL, WEBSITE_URL } from "@/src/constants";

const PrivacyPolicy = () => (
  <div className="flex w-full flex-col gap-4 p-4 text-sm tb:text-base">
    <div className="w-full border-b-2 border-gray-300 pb-2">
      <h1 className="text-lg font-bold tb:text-2xl">Privacy Policy</h1>
      <span className="text-sm">Effective Date: 21/03/2025</span>
    </div>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">1. Introduction</h2>
      <p>
        Welcome to MyTubes. We are committed to protecting your privacy and
        ensuring transparency about how we collect, use, and share your data.
        This Privacy Policy explains how we handle information when you use our
        services, specifically in connection with Google OAuth authentication
        and YouTube data access.
      </p>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">
        2. Information We Collect
      </h2>
      <p>
        When you authenticate with Google to use our services, we request access
        to certain information through the following OAuth scopes:
      </p>
      <ul className="list-outside list-disc pl-5">
        <li>
          <strong>YouTube Read-Only Access</strong> (
          <code className="whitespace-normal break-words">
            https://www.googleapis.com/auth/youtube.readonly
          </code>
          ): We use this scope to retrieve information about your YouTube
          account, such as subscriptions, playlists, and video details. We do
          not modify or delete any of your content.
        </li>
        <li>
          <strong>YouTube Channel Memberships</strong> (
          <code className="whitespace-normal break-words">
            https://www.googleapis.com/auth/youtube.channel-memberships.creator
          </code>
          ): We use this scope to view a list of your active channel members,
          including their membership level and join date. This information is
          used solely to provide insights related to your channel’s audience and
          is not shared with third parties.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">
        3. How We Use Your Information
      </h2>
      <p>We use the collected data to:</p>
      <ul className="list-outside list-disc pb-1 pl-5">
        <li>Provide insights about your YouTube account and memberships.</li>
        <li>Improve user experience and enhance our services.</li>
        <li>Maintain security and prevent unauthorized access.</li>
      </ul>
      <p>
        We do <strong>not</strong> share your personal data with third parties,
        sell it, or use it for advertising purposes.
      </p>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">
        4. Data Storage and Security
      </h2>
      <p>
        We take appropriate measures to protect your data. Your OAuth tokens are
        securely stored and never shared. We do not store sensitive personal
        information beyond what is necessary for service functionality.
      </p>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">
        5. Cookies and Tracking Technologies
      </h2>
      <p>
        We use <strong>Google Analytics</strong> to collect aggregated,
        non-identifiable usage statistics via cookies. These cookies help us
        understand user behavior, improve our service, and optimize performance.
      </p>
      <p>
        You can manage cookie preferences through your browser settings or opt
        out via{" "}
        <a
          className="text-blue-500"
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>
        .
      </p>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">
        6. Your Rights and Choices
      </h2>
      <p>You have the right to:</p>
      <ul className="list-outside list-disc pl-5">
        <li>
          Revoke access to your Google account data at any time via{" "}
          <a
            className="text-blue-500"
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Security Settings
          </a>
          .
        </li>
        <li>
          Request deletion of your data by contacting us at {WEBSITE_MAIL}.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">
        7. Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        reflected on this page with an updated effective date.
      </p>
    </section>

    <section>
      <h2 className="text-base font-semibold tb:text-lg">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p>
        MyTubes <br /> {WEBSITE_MAIL} <br /> {WEBSITE_URL}
      </p>
    </section>
  </div>
);

export default PrivacyPolicy;
