import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import React from "react";

const HomepageHead: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const personal = siteConfig.customFields.personal as Record<string, string>;
  const { withBaseUrl } = useBaseUrlUtils();
  const pageTitle = `${personal.myName} - ${personal.tagline}`;
  const description = siteConfig.tagline;
  const pageImage = withBaseUrl("/img/splash.jpg", { absolute: true });

  return (
    <Head>
      {/* Title */}
      <title>{pageTitle}</title>

      {/* SEO tags */}
      <meta property="og:title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={pageImage} />
      <meta name="twitter:image" content={pageImage} />

      {/* Google Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </Head>
  );
};

export default HomepageHead;
